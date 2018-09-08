import { getCSInterface } from './csinterface'

export const evalScript = async (script) => {
  const csInterface = getCSInterface()
  return new Promise((resolve) => {
    if (csInterface.evalScript) {
      csInterface.evalScript(script, (result) => {
        try {
          if (result === 'undefined') {
            resolve(undefined)
          } else if (result === 'null') {
            resolve(null)
          } else {
            resolve(JSON.parse(result))
          }
        } catch (e) {
          resolve(result)
        }
      })
    } else {
      throw new Error('Executing without CSInterface context (probably not running inside AE).')
    }
  })
}
