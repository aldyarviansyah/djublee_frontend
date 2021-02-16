import routeKey from "../apps/contanta-key/route.key"
import Login from "../views/auth/Login"

const authRoute = [
  {
    path: routeKey.auth.login,
    component: Login,
  },
]

export default authRoute
