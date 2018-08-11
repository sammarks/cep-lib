import { getCSInterface } from './csinterface'
import { SystemPath } from '@cep/csinterface'

export const getDeviceInformation = () => {
  const csInterface = getCSInterface()
  if (csInterface) {
    return {
      hostEnvironment: csInterface.getHostEnvironment ? csInterface.getHostEnvironment() : null,
      hostCapabilities: csInterface.getHostCapabilities ? csInterface.getHostCapabilities() : null,
      extensions: csInterface.getExtensions ? csInterface.getExtensions() : null,
      osInformation: csInterface.getOSInformation ? csInterface.getOSInformation() : null,
      apiVersion: csInterface.getCurrentApiVersion ? csInterface.getCurrentApiVersion() : null
    }
  } else {
    return { csInterfaceError: 'no csinterface found' }
  }
}

export const getExtensionDirectory = () => {
  const csInterface = getCSInterface()
  if (csInterface) {
    return csInterface.getSystemPath(SystemPath.EXTENSION)
  } else {
    return null
  }
}
