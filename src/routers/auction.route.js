import routeKey from "../apps/contanta-key/route.key"
import Dashboard from "../views/dashboard/Dashboard"

const auctionRoute = [
  {
    path: routeKey.auction.views,
    component: Dashboard,
  },
]

export default auctionRoute
