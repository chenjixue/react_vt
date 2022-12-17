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
import { Provider } from "react-redux"
import store from "@/store/index"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
