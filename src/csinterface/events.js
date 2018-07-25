import { getCSInterface } from './csinterface'

export const addEventListener = (name, callback) => {
  const csInterface = getCSInterface()
  if (csInterface && csInterface.addEventListener) {
    return csInterface.addEventListener(name, callback)
  }
}
