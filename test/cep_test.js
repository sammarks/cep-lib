import { expect } from './setup'
import * as cep from '../src/cep'

const makeCEPNotPresent = () => {
  window.cep = undefined
}
const makeCEPPresent = (overrides = {}) => {
  window.cep = Object.assign({
    fs: 'bleh'
  }, overrides)
}

beforeEach(() => {
  makeCEPNotPresent()
})
describe('#checkCEP()', () => {
  it('returns false if CEP is not preset', () => {
    expect(cep.checkCEP()).to.equal(false)
  })
  it('returns true if CEP is present', () => {
    makeCEPPresent()
    expect(cep.checkCEP()).to.equal(true)
  })
})

describe('#fileExists()', () => {
  it('returns false if CEP is not present', () => {
    expect(cep.fileExists('foo')).to.equal(false)
  })
  it('returns true if the stat produces no error', () => {
    const stat = jest.fn().mockReturnValueOnce({ err: null })
    makeCEPPresent({
      fs: { stat }
    })
    expect(cep.fileExists('foo')).to.equal(true)
    expect(stat.mock.calls).to.have.length(1)
    expect(stat.mock.calls[0]).to.deep.equal(['foo'])
  })
  it('returns false if the stat produces an error', () => {
    const stat = jest.fn().mockReturnValueOnce({ err: 'foo' })
    makeCEPPresent({
      fs: { stat }
    })
    expect(cep.fileExists('foo')).to.equal(false)
  })
})

describe('#deleteFile()', () => {
  describe('CEP is not present', () => {
    it('returns false', () => {
      expect(cep.deleteFile('foo')).to.equal(false)
    })
  })
  describe('CEP is present', () => {
    let deleteFile = null
    beforeEach(() => {
      deleteFile = jest.fn()
      makeCEPPresent({
        fs: {
          deleteFile,
          ERR_UNKNOWN: 1,
          ERR_INVALID_PARAMS: 2
        }
      })
    })
    it('returns true if the file was deleted', () => {
      deleteFile.mockReturnValueOnce({ err: null })
      expect(cep.deleteFile('foo')).to.equal(true)
      expect(deleteFile.mock.calls).to.have.length(1)
      expect(deleteFile.mock.calls[0]).to.deep.equal(['foo'])
    })
    it('returns false if ERR_UNKNOWN was thrown', () => {
      deleteFile.mockReturnValueOnce({ err: 1 })
      expect(cep.deleteFile('foo')).to.equal(false)
    })
    it('returns false if ERR_INVALID_PARAMS was thrown', () => {
      deleteFile.mockReturnValueOnce({ err: 2 })
      expect(cep.deleteFile('foo')).to.equal(false)
    })
    it('returns true if a different error is thrown', () => {
      deleteFile.mockReturnValueOnce({ err: 3 })
      expect(cep.deleteFile('foo')).to.equal(true)
    })
  })
})
