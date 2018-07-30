export const checkCEP = () => {
  return !!(window && window.cep && window.cep.fs)
}

export const fileExists = (path) => {
  if (!checkCEP()) return false
  const result = window.cep.fs.stat(path)
  return !result.err
}

export const deleteFile = (path) => {
  if (!checkCEP()) return false
  const result = window.cep.fs.deleteFile(path)
  if (result.err === window.cep.fs.ERR_UNKNOWN || result.err === window.cep.fs.ERR_INVALID_PARAMS) {
    console.warn(`Could not delete file: '${path}' because of an unknown error.`)
    return false
  }
  return true
}
