import routeKey from "../apps/contanta-key/route.key"
import Car from "../views/car/Car"
import CarAdd from "../views/car/CarAdd"
import CarEdit from "../views/car/CarEdit"
import Credit from "../views/credit/Credit"
import Dashboard from "../views/dashboard/Dashboard"

const carRoute = [
  {
    path: routeKey.car.views,
    component: Car,
  },
  {
    path: routeKey.car.add,
    component: CarAdd,
  },
  {
    path: routeKey.car.edit,
    component: CarEdit,
  },
  {
    path: routeKey.spec.views,
    component: Dashboard,
  },
  {
    path: routeKey.nego.views,
    component: Dashboard,
  },
  {
    path: routeKey.market.views,
    component: Dashboard,
  },
  {
    path: routeKey.credit.views,
    component: Credit,
  },
]

export default carRoute
