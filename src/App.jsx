import { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout.jsx"
import routes from "./routers/route"

import "./assets/styles/App.css"
import NotFound from "./components/layout/NotFound.jsx"
import storage from "./apps/helpers/storage.helper.js"

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              exact={true}
              path={route.path}
              render={(props) => {
                const { history } = props
                const authRoute = props.match.path.includes("auth")
                const cred = storage.getCred()

                if (authRoute) {
                  if (cred !== null) {
                    history.replace("/")
                  } else {
                    return <route.component {...props} routes={route.routes} />
                  }
                } else {
                  if (cred === null) {
                    history.replace("/auth/login")
                  } else {
                    return (
                      <>
                        <MainLayout>
                          <route.component {...props} routes={route.routes} />
                        </MainLayout>
                      </>
                    )
                  }
                }
              }}
            />
          ))}
          <Route
            path="*"
            render={(props) => <NotFound {...props}></NotFound>}
          ></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
