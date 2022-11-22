import Style from "./index.module.scss"
import {
    createHashRouter,
    RouterProvider,
    Route,
    Outlet,
    Link,
} from "react-router-dom";
const Cpo = () => {

    return <div className={Style.text1}>
        这是组件一
        <Outlet/>
    </div>
}
export default Cpo