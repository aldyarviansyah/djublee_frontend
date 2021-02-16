import instance from "../helpers/instace.helper"

function createForm(form) {
  const f = new FormData()

  f.append("email", form.email)
  f.append("password", form.password)

  return f
}

const authApi = {
  async login(formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.post("/api/users/login", form)
      return resp.data
    } catch (error) {
      throw error
    }
  },
}

export default authApi
