import React from "react"
import Style from "./index.module.scss"
// const Cpt = () => {

//     return <div className={Style.text1}>
//         这是组件二
//     </div>
// }
class Cpt extends React.Component{
    render(): React.ReactNode {
        return <div>cpt</div>
    }
    componentWillUnmount(): void {
        console.log("componentWillUnmount---")
    }
}
export default Cpt