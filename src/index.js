import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"

import configureStore from "./stores/store"
import reportWebVitals from "./apps/helpers/webVitals.helper"

import "./assets/styles/index.css"

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
