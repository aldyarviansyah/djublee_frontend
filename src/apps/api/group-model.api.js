import instance from "../helpers/instace.helper"

function createForm(form) {
  const f = new FormData()

  f.append("name", form.name)
  f.append("brandId", form.brandId)
  if (form.typeId === undefined) {
    f.append("typeId", 11)
  }

  return f
}

const defaultParams = { limit: 100 }

const groupModelApi = {
  async browse(params) {
    try {
      const resp = await instance.get("/api-admin/groupModels", {
        params: { ...params, ...defaultParams },
      })
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async browseByMerkId(merkId) {
    try {
      const resp = await instance.get(`/api-admin/groupModels/brand/${merkId}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async read(id) {
    try {
      const resp = await instance.get(`api-admin/groupModels/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async edit(id, formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.put(`api-admin/groupModels/id/${id}`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async add(formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.post(`/api-admin/groupModels`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async delete(id) {
    try {
      const resp = await instance.delete(`api-admin/groupModels/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },
}

export default groupModelApi
