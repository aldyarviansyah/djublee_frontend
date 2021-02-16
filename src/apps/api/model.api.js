import instance from "../helpers/instace.helper"

function createForm(form) {
  const f = new FormData()

  f.append("name", form.name)
  f.append("groupModelId", form.groupModelId)

  return f
}

const defaultParams = { limit: 100 }

const modelApi = {
  async browse(params) {
    try {
      const resp = await instance.get("/api-admin/models", {
        params: { ...params, ...defaultParams },
      })
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async browseByGroupModelId(groupModelId) {
    try {
      const resp = await instance.get(
        `/api-admin/models/groupModel/${groupModelId}`
      )
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async read(id) {
    try {
      const resp = await instance.get(`api-admin/models/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async edit(id, formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.put(`api-admin/models/id/${id}`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async add(formData) {
    try {
      const form = createForm(formData)
      const resp = await instance.post(`/api-admin/models`, form)
      return resp.data
    } catch (error) {
      throw error
    }
  },

  async delete(id) {
    try {
      const resp = await instance.delete(`api-admin/models/id/${id}`)
      return resp.data
    } catch (error) {
      throw error
    }
  },
}

export default modelApi
