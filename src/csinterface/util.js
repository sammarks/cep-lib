import { getCSInterface } from './csinterface'

export const requestOpenExtension = (name) => {
  const csInterface = getCSInterface()
  if (csInterface && csInterface.requestOpenExtension) {
    csInterface.requestOpenExtension(name)
  }
}

export const closeExtension = () => {
  const csInterface = getCSInterface()
  if (csInterface && csInterface.closeExtension) {
    csInterface.closeExtension()
  }
}

export const openURL = (url) => {
  const csInterface = getCSInterface()
  if (csInterface && csInterface.openURLInDefaultBrowser) {
    csInterface.openURLInDefaultBrowser(url)
  }
}
