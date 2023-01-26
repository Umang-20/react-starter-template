import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    layout: "public",
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    layout: "auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "private",
  },
];

export default routes;
