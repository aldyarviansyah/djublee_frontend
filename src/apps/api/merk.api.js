import instance from "../helpers/instace.helper"

function createForm(form) {
  const f = new FormData()

  f.append("name", form.name)
  f.append("status", "")
  if (form.image !== undefined) {
    f.append("images", form.image)
  }

  return f
}

const defaultParams = { limit: 100 }

const merkApi = {
  async browse(params) {
    try {
      const resp = await instance.get("/api/brands", {
        params: { ...params, ...defaultParams },
      })
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async read(id) {
    try {
      const resp = await instance.get(`/api-admin/brands/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async edit(id, formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.put(`/api-admin/brands/id/${id}`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async add(formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.post(`/api-admin/brands`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async delete(id) {
    try {
      const resp = await instance.delete(`/api-admin/brands/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },
}

export default merkApi
