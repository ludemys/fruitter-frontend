import {HomeRoutes} from "@/Home/router/home.routes.js";
import {PostsRoutes} from "@/Posts/router/posts.routes.js";

let routes = Array.prototype.concat(
    HomeRoutes,
    PostsRoutes
)

console.log(routes)
export default routes