import React, { lazy, Suspense } from 'react'
import {
  createHashRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
// import Home from "@/view/home/index"
let withLazyComponet = (path: string, loadComponent = (<div>Loading...</div>)) => {
  // debugger;
  let baseUrl = "../"
  path = path.replace("@/", baseUrl)
  let ShowComponent = lazy(() => import( /* @vite-ignore */ path))
  return () => (
    <Suspense fallback={<div>Loading...</div>}>
      <ShowComponent />
    </Suspense>
  )
}

let Cpo = withLazyComponet("@/components/component_one/index.tsx")
let Cpt = withLazyComponet("@/components/component_two/index.tsx")
let Home = withLazyComponet("@/view/home/index.tsx")


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
    path:"*",
    element: <Navigate to="/cpt" />
  }
]);

export default router