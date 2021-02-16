import instance from "../helpers/instace.helper"

function createForm(form) {
  const f = new FormData()

  f.append("year", form.year)
  f.append("modelId", form.modelId)
  f.append("price", 400000000)
  if (form.images !== undefined) {
    f.append("images", form.images)
  }

  return f
}

const defaultParams = { sort: "desc", by: "year", limit: 100 }

const carApi = {
  async browse(params) {
    try {
      const resp = await instance.get("/api-admin/modelYears", {
        params: { ...defaultParams, ...params },
      })
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async read(id) {
    try {
      const resp = await instance.get(`api-admin/modelYears/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async edit(id, formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.put(`api-admin/modelYears/id/${id}`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async add(formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.post(`/api-admin/modelYears`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async delete(id) {
    try {
      const resp = await instance.delete(`api-admin/modelYears/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },
}

export default carApi
