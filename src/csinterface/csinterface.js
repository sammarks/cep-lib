import { CSInterface } from '@cep/csinterface'

const csInterface = CSInterface && window.__adobe_cep__ ? new CSInterface() : null
export const getCSInterface = () => {
  return csInterface || {}
}

export const insideCEP = () => {
  return csInterface !== null
}
