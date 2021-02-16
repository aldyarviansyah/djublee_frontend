import routeKey from "../apps/contanta-key/route.key"
import File from "../views/file/File"

const fileRoute = [
  {
    path: routeKey.file.views,
    component: File,
  },
]

export default fileRoute
