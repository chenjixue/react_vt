import React, { ComponentType, lazy, Suspense, useEffect } from 'react'
import {
  createHashRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  useNavigate,
  redirect,
  useLocation,
} from "react-router-dom";
import Cpo1 from "@/components/component_one/index"
import Cpt1 from "@/components/component_two/index"
import Home1 from "@/view/home/index"
import Login from "@/view/login/index"

// const components = import.meta.glob(['@/**/**/*.tsx','!@/router/index.tsx'])
// console.log(components, "components----")
// let withLazyComponet = (path: string, loadComponent = (<div>Loading...</div>)) => {
//   let baseUrl = "/src/"
//   path = path.replace("@/", baseUrl)
//   let ShowComponent = lazy(components[path] as () => Promise<{ default: ComponentType<any>; }>)
//   return () => (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ShowComponent />
//     </Suspense>
//   )
// }

// let Cpo = withLazyComponet("@/components/component_one/index.tsx")
// let Cpt = withLazyComponet("@/components/component_two/index.tsx")
// let Home = withLazyComponet("@/view/home/index.tsx")
// let Login = withLazyComponet("@/view/login/index.tsx")


let AuthComponent = (ShowComponet: any) => {
  let token = localStorage.getItem("token");
  if (!token && location.hash.substring(1) != "/login") {
    return () => <Navigate to="/login" />
  }
  return ShowComponet
}
let Cpo = AuthComponent(Cpo1)
let Cpt = AuthComponent(Cpt1)
let Home = AuthComponent(Home1)
// let Login = AuthComponent(Login1)

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/cpt" />
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/cpt",
        element: (<Cpt />)
      },
      {
        path: "/cpo",
        element: (<Cpo />)
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <Navigate to="/cpt" />
  }
]);

export default router