import { combineReducers } from "redux"
import authReducer from "./auth/auth.reducer"
import carReducer from "./car/car.reducer"
import groupModelReducer from "./group-model/group-model.reducer"
import merkReducer from "./merk/merk.reducer"
import modelReducer from "./model/model.reducer"

const modules = combineReducers({
  merk: merkReducer,
  groupModel: groupModelReducer,
  model: modelReducer,
  car: carReducer,
  auth: authReducer,
})

export default modules
