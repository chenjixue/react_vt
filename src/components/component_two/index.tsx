import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import Style from "./index.module.scss"
import store, { useAppDispatch } from "@/store"
import { actions, asyncAction } from "@/store/Number"
type stateType = ReturnType<typeof store.getState>;
// type AppDispatch = typeof store.dispatch
const Cpt = (props: any) => {
    // let dispatch = useDispatch()
    let { decremented, incremented } = actions
    let { fetchUsers } = asyncAction
    const dispatch = useAppDispatch()
    let add = () => {
        dispatch(fetchUsers("chenjixuedata"))
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