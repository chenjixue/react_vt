import React from "react"
import Style from "./index.module.scss"
import store from "@/store"
// const Cpt = () => {

//     return <div className={Style.text1}>
//         这是组件二
//     </div>
// }
class Cpt extends React.Component {
    render(): React.ReactNode {
        const state = store.getState()
        return <div>cpt, 这是store的某一个值{state.value}</div>
    }
    componentWillUnmount(): void {
        console.log("componentWillUnmount---")
    }
}
export default Cpt