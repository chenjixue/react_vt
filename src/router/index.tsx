import React, { ComponentType, lazy, Suspense } from 'react'
import {
  createHashRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
const components = import.meta.glob('@/**/**/*.tsx')
console.log(components, "components----")
// import Home from "@/view/home/index"
let withLazyComponet = (path: string, loadComponent = (<div>Loading...</div>)) => {
  // debugger;
  let baseUrl = "/src/"
  path = path.replace("@/", baseUrl)
  let ShowComponent = lazy(components[path] as () => Promise<{ default: ComponentType<any>; }>)
  return () => (
    <Suspense fallback={<div>Loading...</div>}>
      <ShowComponent />
    </Suspense>
  )
}

let Cpo = withLazyComponet("@/components/component_one/index.tsx")
let Cpt = withLazyComponet("@/components/component_two/index.tsx")
let Home = withLazyComponet("@/view/home/index.tsx")
let Login = withLazyComponet("@/view/login/index.tsx")


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