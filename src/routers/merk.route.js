import routeKey from "../apps/contanta-key/route.key"
import Merk from "../views/merk/Merk"
import MerkAdd from "../views/merk/MerkAdd"
import MerkEdit from "../views/merk/MerkEdit"

const merkRoute = [
  {
    path: routeKey.merk.views,
    component: Merk,
  },
  {
    path: routeKey.merk.add,
    component: MerkAdd,
  },
  {
    path: routeKey.merk.edit,
    component: MerkEdit,
  },
]

export default merkRoute
