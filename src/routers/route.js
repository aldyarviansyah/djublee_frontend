import routeKey from "../apps/contanta-key/route.key"
import Dashboard from "../views/dashboard/Dashboard"
import authRoute from "./auth.route"
import bannerRoute from "./banner.route"
import carRoute from "./car.route"
import groupModelRoute from "./group.model.route"
import merkRoute from "./merk.route"
import modelRoute from "./model.route"
import newsRoute from "./news.route"
import notificationRoute from "./notification.route"
import sellRoute from "./sell.route"
import userRoute from "./user.route"
import yearRoute from "./year.route"
import fileRoute from "./file.route"
import auctionRoute from "./auction.route"

const routes = [
  {
    path: routeKey.dashboard.main,
    component: Dashboard,
  },
  ...authRoute,
  ...carRoute,
  ...merkRoute,
  ...groupModelRoute,
  ...modelRoute,
  ...yearRoute,
  ...newsRoute,
  ...bannerRoute,
  ...userRoute,
  ...sellRoute,
  ...notificationRoute,
  ...fileRoute,
  ...auctionRoute,
]

export default routes
