import { expect } from '../setup'
import { getCSInterface } from '../../src/csinterface/csinterface'
import * as util from '../../src/csinterface/util'

jest.mock('../../src/csinterface/csinterface')

describe('csInterface is present', () => {
  let func
  beforeEach(() => {
    func = jest.fn()
    getCSInterface.mockReturnValueOnce({
      requestOpenExtension: func,
      closeExtension: func,
      openURLInDefaultBrowser: func
    })
  })
  test('#requestOpenExtension() calls the proper function', () => {
    expect(() => util.requestOpenExtension('test')).to.not.throw()
    expect(func.mock.calls).to.deep.equal([['test']])
  })
  test('#closeExtension() calls the proper function', () => {
    expect(() => util.closeExtension()).to.not.throw()
    expect(func.mock.calls).to.deep.equal([[]])
  })
  test('#openURL() calls the proper function', () => {
    expect(() => util.openURL('test')).to.not.throw()
    expect(func.mock.calls).to.deep.equal([['test']])
  })
})
describe('csInterface is not present', () => {
  beforeEach(() => {
    getCSInterface.mockReturnValueOnce({})
  })
  test('#requestOpenExtension() does not throw', () => {
    expect(() => util.requestOpenExtension('test')).to.not.throw()
  })
  test('#closeExtension() does not throw', () => {
    expect(() => util.closeExtension()).to.not.throw()
  })
  test('#openURL() does not throw', () => {
    expect(() => util.openURL('test')).to.not.throw()
  })
})
