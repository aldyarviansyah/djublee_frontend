import routeKey from "../apps/contanta-key/route.key"
import News from "../views/news/News"
import NewsAdd from "../views/news/NewsAdd"
import NewsEdit from "../views/news/NewsEdit"

const newsRoute = [
  {
    path: routeKey.news.views,
    component: News,
  },
  {
    path: routeKey.news.add,
    component: NewsAdd,
  },
  {
    path: routeKey.news.edit,
    component: NewsEdit,
  },
]

export default newsRoute
