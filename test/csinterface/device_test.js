import { expect } from '../setup'
import { getCSInterface } from '../../src/csinterface/csinterface'
import * as device from '../../src/csinterface/device'

jest.mock('../../src/csinterface/csinterface')

describe('#getDeviceInformation()', () => {
  describe('csInterface is present', () => {
    let mockedReturnValue = {}
    let expectedValue = {}
    beforeEach(() => {
      mockedReturnValue = {
        getHostEnvironment: () => 'getHostEnvironment',
        getHostCapabilities: () => 'getHostCapabilities',
        getExtensions: () => 'getExtensions',
        getOSInformation: () => 'getOSInformation',
        getCurrentApiVersion: () => 'getCurrentApiVersion'
      }
      expectedValue = {
        hostEnvironment: 'getHostEnvironment',
        hostCapabilities: 'getHostCapabilities',
        extensions: 'getExtensions',
        osInformation: 'getOSInformation',
        apiVersion: 'getCurrentApiVersion'
      }
    })
    describe('all functions are present', () => {
      it('returns all values', () => {
        getCSInterface.mockReturnValueOnce(mockedReturnValue)
        expect(device.getDeviceInformation()).to.deep.equal(expectedValue)
      })
    })
    describe('getHostEnvironment is not present', () => {
      it('returns minus hostEnvironment', () => {
        delete mockedReturnValue.getHostEnvironment
        expectedValue.hostEnvironment = null
        getCSInterface.mockReturnValueOnce(mockedReturnValue)
        expect(device.getDeviceInformation()).to.deep.equal(expectedValue)
      })
    })
    describe('getHostCapabilities is not present', () => {
      it('returns minus hostCapabilities', () => {
        delete mockedReturnValue.getHostCapabilities
        expectedValue.hostCapabilities = null
        getCSInterface.mockReturnValueOnce(mockedReturnValue)
        expect(device.getDeviceInformation()).to.deep.equal(expectedValue)
      })
    })
    describe('getExtensions is not present', () => {
      it('returns minus extensions', () => {
        delete mockedReturnValue.getExtensions
        expectedValue.extensions = null
        getCSInterface.mockReturnValueOnce(mockedReturnValue)
        expect(device.getDeviceInformation()).to.deep.equal(expectedValue)
      })
    })
    describe('getOSInformation is not present', () => {
      it('returns minus osInformation', () => {
        delete mockedReturnValue.getOSInformation
        expectedValue.osInformation = null
        getCSInterface.mockReturnValueOnce(mockedReturnValue)
        expect(device.getDeviceInformation()).to.deep.equal(expectedValue)
      })
    })
    describe('getCurrentApiVersion is not present', () => {
      it('returns minus apiVersion', () => {
        delete mockedReturnValue.getCurrentApiVersion
        expectedValue.apiVersion = null
        getCSInterface.mockReturnValueOnce(mockedReturnValue)
        expect(device.getDeviceInformation()).to.deep.equal(expectedValue)
      })
    })
  })
  describe('csInterface is not present', () => {
    it('returns an error object', () => {
      getCSInterface.mockReturnValueOnce(null)
      expect(device.getDeviceInformation()).to.deep.equal({
        csInterfaceError: 'no csinterface found'
      })
    })
  })
})
