import routeKey from "../apps/contanta-key/route.key"
import Dashboard from "../views/dashboard/Dashboard"
import Access from "../views/user/Access"
import CreateUser from "../views/user/CreateUser"
import User from "../views/user/User"
import UserAdd from "../views/user/UserAdd"
import UserAdmin from "../views/user/UserAdmin"
import UserEdit from "../views/user/UserEdit"

const userRoute = [
  {
    path: routeKey.userAdmin.views,
    component: UserAdmin,
  },
  {
    path: routeKey.createUser.views,
    component: CreateUser,
  },
  {
    path: routeKey.access.views,
    component: Access,
  },
  {
    path: routeKey.user.views,
    component: User,
  },
  {
    path: routeKey.user.add,
    component: UserAdd,
  },
  {
    path: routeKey.user.edit,
    component: UserEdit,
  },
  {
    path: "/profile-user",
    component: UserEdit,
  },
  {
    path: routeKey.review.views,
    component: User,
  },
  {
    path: routeKey.statusMitra.views,
    component: Dashboard,
  },
  {
    path: routeKey.subscription.views,
    component: Dashboard,
  },
]

export default userRoute
