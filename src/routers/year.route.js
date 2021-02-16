import routeKey from "../apps/contanta-key/route.key"
import Year from "../views/year/Year"
import YearAdd from "../views/year/YearAdd"
import YearEdit from "../views/year/YearEdit"

const yearRoute = [
  {
    path: routeKey.year.views,
    component: Year,
  },
  {
    path: routeKey.year.add,
    component: YearAdd,
  },
  {
    path: routeKey.year.edit,
    component: YearEdit,
  },
]

export default yearRoute
