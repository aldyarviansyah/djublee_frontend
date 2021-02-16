import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import modules from "./modules"

export default function configureStore(preloadedState = undefined) {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware)

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)

  const store = createStore(modules, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./modules", () => store.replaceReducer(modules))
  }

  return store
}
