import React, { lazy, Suspense } from 'react'
import {
  createHashRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
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


const router = createHashRouter([
  {
    path: "/",
    element: <Cpo />,
    children: [
      {
        path: "/about",
        element: (<Cpt />)
      },
    ]
  },

]);

export default router