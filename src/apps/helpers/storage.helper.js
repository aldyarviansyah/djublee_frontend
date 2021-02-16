import encode from "./encode.helper"

const storage = {
  credKey: `DJUBLI_PANEL_CRED`,

  saveCred(credential = "") {
    const val = JSON.stringify(credential)
    const valEncrypt = encode.encrypt(val)

    this.save(this.credKey, valEncrypt)
  },

  getCred() {
    try {
      const strEncrypt = localStorage.getItem(this.credKey)
      const strVal = encode.decrypt(strEncrypt)
      const val = JSON.parse(strVal)

      return val
    } catch (error) {
      return null
    }
  },

  save(key, value) {
    localStorage.setItem(key, value)
  },

  get(key) {
    const val = localStorage.getItem(key)
    return val
  },

  clear() {
    localStorage.clear()
  },
}

export default storage
