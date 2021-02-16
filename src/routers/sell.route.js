import routeKey from "../apps/contanta-key/route.key"
import Sell from "../views/sell/Sell"

const sellRoute = [
  {
    path: routeKey.sell.views,
    component: Sell,
  },
]

export default sellRoute
