import * as events from '../../src/csinterface/events'
import { getCSInterface } from '../../src/csinterface/csinterface'
import { expect } from '../setup'

jest.mock('../../src/csinterface/csinterface')

describe('#addEventListener()', () => {
  it('calls addEventListener if available', () => {
    const addEventListener = jest.fn().mockReturnValueOnce({ foo: 'bar' })
    getCSInterface.mockReturnValueOnce({ addEventListener })
    expect(events.addEventListener('test', 'bar')).to.deep.equal({ foo: 'bar' })
    expect(addEventListener.mock.calls).to.have.length(1)
    expect(addEventListener.mock.calls[0]).to.deep.equal(['test', 'bar'])
  })
  it('does nothing if addEventListener is not available', () => {
    getCSInterface.mockReturnValueOnce({})
    expect(() => events.addEventListener('test', 'bar')).to.not.throw()
  })
})
