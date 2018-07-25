import { expect } from '../setup'
import * as theme from '../../src/csinterface/theme'
import * as csInterface from '../../src/csinterface/csinterface'

jest.mock('../../src/csinterface/csinterface')

describe('#convertColorObject()', () => {
  it('converts a color object', () => {
    expect(theme.convertColorObject({ red: 255, green: 255, blue: 255 }))
      .to.equal('#FFFFFF')
  })
})

describe('#createMockColor()', () => {
  it('creates a mock color', () => {
    expect(theme.createMockColor(1, 1, 1)).to.deep.equal({
      red: 1,
      green: 1,
      blue: 1
    })
  })
})

describe('#getAppSkinInfo()', () => {
  it('gets app skin info from csInterface', () => {
    csInterface.getCSInterface.mockReturnValueOnce({
      hostEnvironment: {
        appSkinInfo: { foo: 'bar' }
      }
    })
    expect(theme.getAppSkinInfo()).to.deep.equal({ foo: 'bar' })
  })
  it('gets a dummy app skin info object if no csInterface', () => {
    csInterface.getCSInterface.mockReturnValueOnce({})
    expect(theme.getAppSkinInfo()).to.deep.equal({
      panelBackgroundColor: {
        color: theme.createMockColor(38.25, 38.25, 38.25)
      },
      baseFontFamily: 'Adobe Clean',
      appBarBackgroundColor: {
        color: theme.createMockColor(38.25, 38.25, 38.25)
      },
      baseFontSize: 10,
      systemHighlightColor: theme.createMockColor(0, 120, 215)
    })
  })
})

describe('#getThemeInformation()', () => {
  it('translates the result from #getAppSkinInfo() properly', () => {
    csInterface.getCSInterface.mockReturnValueOnce({
      hostEnvironment: {
        appSkinInfo: {
          panelBackgroundColor: {
            color: theme.createMockColor(255, 255, 255)
          },
          baseFontFamily: 'Adobe Clean',
          appBarBackgroundColor: {
            color: theme.createMockColor(255, 0, 0)
          },
          baseFontSize: 10,
          systemHighlightColor: theme.createMockColor(0, 255, 255)
        }
      }
    })
    expect(theme.getThemeInformation()).to.deep.equal({
      baseFontSize: 10,
      baseFontFamily: 'Adobe Clean',
      systemHighlightColor: '#00FFFF',
      appBarBackgroundColor: '#FF0000',
      panelBackgroundColor: '#FFFFFF'
    })
  })
})
