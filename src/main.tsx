import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import App from './App'
import 'reset-css'
import "@/assets/css/global.scss"
import router from "@/router"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
