import CryptoJs from "crypto-js"

const secretKey = "Djubli-User-Secret"

const encode = {
  encrypt(value = "") {
    const val = CryptoJs.AES.encrypt(value, secretKey).toString()

    return val
  },

  decrypt(value = "") {
    const secret = CryptoJs.AES.decrypt(value, secretKey)

    return secret.toString(CryptoJs.enc.Utf8)
  },
}

export default encode
