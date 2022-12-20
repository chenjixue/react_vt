import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import Style from "./index.module.scss"
import store from "@/store"
import { incremented, decremented } from "@/store/reducer"
type stateType = ReturnType<typeof store.getState>;
const Cpt = (props: any) => {
    let dispatch = useDispatch()
    let add = () => {
        dispatch(incremented())
    }
    let dec = () => {
        dispatch(decremented())
    }
    const count = useSelector((state: stateType) => state.counterSlice.value)
    return <>
        <button onClick={add}>点击加一个</button>
        <button onClick={dec}>点击减一个</button>
        <div>cpt, 这是store的某一个值{count}</div>
    </>
}
export default Cpt