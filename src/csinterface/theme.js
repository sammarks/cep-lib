import { getCSInterface } from './csinterface'
import colorConvert from 'color-convert'

export const convertColorObject = (colorObj) => {
  return `#${colorConvert.rgb.hex(colorObj.red, colorObj.green, colorObj.blue)}`
}

export const createMockColor = (red, green, blue) => ({ red, green, blue })

export const getAppSkinInfo = () => {
  const csInterface = getCSInterface()
  if (csInterface.hostEnvironment) {
    return csInterface.hostEnvironment.appSkinInfo
  } else {
    return {
      panelBackgroundColor: {
        color: createMockColor(38.25, 38.25, 38.25)
      },
      baseFontFamily: 'Adobe Clean',
      appBarBackgroundColor: {
        color: createMockColor(38.25, 38.25, 38.25)
      },
      baseFontSize: 10,
      systemHighlightColor: createMockColor(0, 120, 215)
    }
  }
}

export const getThemeInformation = () => {
  const themeInformation = getAppSkinInfo()
  return {
    baseFontSize: themeInformation.baseFontSize,
    baseFontFamily: themeInformation.baseFontFamily,
    systemHighlightColor: convertColorObject(themeInformation.systemHighlightColor),
    appBarBackgroundColor: convertColorObject(themeInformation.appBarBackgroundColor.color),
    panelBackgroundColor: convertColorObject(themeInformation.panelBackgroundColor.color)
  }
}
