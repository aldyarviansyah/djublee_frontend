import routeKey from "../apps/contanta-key/route.key"
import Model from "../views/model/Model"
import ModelAdd from "../views/model/ModelAdd"
import ModelEdit from "../views/model/ModelEdit"

const modelRoute = [
  {
    path: routeKey.model.views,
    component: Model,
  },
  {
    path: routeKey.model.add,
    component: ModelAdd,
  },
  {
    path: routeKey.model.edit,
    component: ModelEdit,
  },
]

export default modelRoute
