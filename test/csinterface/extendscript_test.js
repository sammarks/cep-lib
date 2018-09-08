import * as extendscript from '../../src/csinterface/extendscript'
import { getCSInterface } from '../../src/csinterface/csinterface'
import { expect } from '../setup'

jest.mock('../../src/csinterface/csinterface')

describe('#evalScript()', () => {
  it('throws an error if there is no csInterface context', async () => {
    getCSInterface.mockReturnValueOnce({})
    return expect(extendscript.evalScript('foo')).to.be
      .rejectedWith('Executing without CSInterface context (probably not running inside AE).')
  })
  describe('successful result', () => {
    const evalScript = jest.fn()
    beforeEach(() => {
      getCSInterface.mockReturnValueOnce({ evalScript })
    })
    it('runs the script and returns JSON results', async () => {
      evalScript.mockImplementationOnce((script, callback) => callback(JSON.stringify({ foo: 'bar' })))
      return expect(extendscript.evalScript('foo')).to.eventually.deep.equal({ foo: 'bar' }).then(() => {
        expect(evalScript.mock.calls).to.have.length(1)
        expect(evalScript.mock.calls[0][0]).to.equal('foo')
      })
    })
    it('runs the script and returns non-JSON results', async () => {
      evalScript.mockImplementationOnce((script, callback) => callback('foo'))
      return expect(extendscript.evalScript('foo')).to.eventually.equal('foo')
    })
    it('runs the script and returns undefined results', async () => {
      evalScript.mockImplementationOnce((script, callback) => callback('undefined'))
      return expect(extendscript.evalScript('foo')).to.eventually.equal(undefined)
    })
    it('runs the script and returns null results', async () => {
      evalScript.mockImplementationOnce((script, callback) => callback('null'))
      return expect(extendscript.evalScript('foo')).to.eventually.equal(null)
    })
  })
})
