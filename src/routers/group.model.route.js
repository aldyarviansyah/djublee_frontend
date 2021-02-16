import routeKey from "../apps/contanta-key/route.key"
import GroupModel from "../views/group-model/GroupModel"
import GroupModelAdd from "../views/group-model/GroupModelAdd"
import GroupModelEdit from "../views/group-model/GroupModelEdit"

const groupModelRoute = [
  {
    path: routeKey.groupModel.views,
    component: GroupModel,
  },
  {
    path: routeKey.groupModel.add,
    component: GroupModelAdd,
  },
  {
    path: routeKey.groupModel.edit,
    component: GroupModelEdit,
  },
]

export default groupModelRoute
