import { getCSInterface, insideCEP } from './csinterface'
import { addEventListener } from './events'
import { evalScript } from './extendscript'
import { convertColorObject, createMockColor, getThemeInformation, getAppSkinInfo } from './theme'
import { getDeviceInformation } from './device'
import { requestOpenExtension, closeExtension, openURL } from './util'

export {
  getCSInterface,
  insideCEP,
  addEventListener,
  evalScript,
  convertColorObject,
  createMockColor,
  getThemeInformation,
  getAppSkinInfo,
  getDeviceInformation,
  requestOpenExtension,
  closeExtension,
  openURL
}
