import carApi from "../../apps/api/car.api"
import carType from "./car.type"

const carAction = {
  browse(params) {
    return async (dispatch) => {
      try {
        const resp = await carApi.browse(params)
        dispatch({ type: carType.CAR_BROWSE, payload: resp })
      } catch (error) {
        throw error
      }
    }
  },

  read(id) {
    return async (dispatch) => {
      try {
        const resp = await carApi.read(id)
        dispatch({ type: carType.CAR_READ, payload: resp })
      } catch (error) {
        throw error
      }
    }
  },

  edit(id, form, func = () => {}) {
    return async (dispatch) => {
      try {
        await carApi.edit(id, form)
        func()
      } catch (error) {
        throw error
      }
    }
  },

  add(form, func = () => {}) {
    return async (dispatch) => {
      try {
        await carApi.add(form)
        func()
      } catch (error) {
        throw error
      }
    }
  },

  delete(id, func = () => {}) {
    return async (dispatch) => {
      try {
        await carApi.delete(id)
        func()
      } catch (error) {
        throw error
      }
    }
  },

  reset() {
    return (dispatch) => {
      dispatch({ type: carType.CAR_RESET })
    }
  },
}

export default carAction
