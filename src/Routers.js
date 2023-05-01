import AboutUs from "./puges/AboutUsPage";
import Blog from "./puges/Blog";
import BlogPage from "./puges/BlogPage";
import HomePage from "./puges/HomePage";
import NotFound from "./puges/NotFound";
import PostPage from "./puges/Postpage";
import Profile from "./puges/Profile";

const Routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/Profile", component: Profile },
  { path: "/about-us", component: AboutUs },
  { path: "/post/:id([0-9]+)?", component: PostPage },
  { path: "/", exact: true, component: HomePage },
  { component: NotFound },
];

export default Routes;
