import carType from "./car.type"

const initState = {
  cars: [],
  pagination: null,
  car: null,
}

function carReducer(state = initState, action) {
  const { type, payload } = action

  switch (type) {
    case carType.CAR_BROWSE:
      return {
        ...state,
        cars: payload.data !== null ? payload.data : [],
        pagination: payload.pagination,
      }

    case carType.CAR_READ:
      return {
        ...state,
        car: payload.data,
      }

    case carType.CAR_RESET:
      return initState

    default:
      return state
  }
}

export default carReducer
