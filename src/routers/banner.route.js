import routeKey from "../apps/contanta-key/route.key"
import Banner from "../views/banner/Banner"
import BannerAdd from "../views/banner/BannerAdd"
import BannerEdit from "../views/banner/BannerEdit"

const bannerRoute = [
  {
    path: routeKey.banner.views,
    component: Banner,
  },
  {
    path: routeKey.banner.add,
    component: BannerAdd,
  },
  {
    path: routeKey.banner.edit,
    component: BannerEdit,
  },
]

export default bannerRoute
