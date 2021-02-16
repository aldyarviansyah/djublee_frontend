import routeKey from "../apps/contanta-key/route.key"
import Notification from "../views/notification/Notification"
import NotificationAdd from "../views/notification/NotificationAdd"
import NotificationEdit from "../views/notification/NotificationEdit"

const notificationRoute = [
  {
    path: routeKey.notification.views,
    component: Notification,
  },
  {
    path: routeKey.notification.add,
    component: NotificationAdd,
  },
  {
    path: routeKey.notification.edit,
    component: NotificationEdit,
  },
]

export default notificationRoute
