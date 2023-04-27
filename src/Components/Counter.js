import { useDispatch, useSelector } from "react-redux"
import { change, decrement, increment } from "../Redux/Actions"

const Counter=()=>{
    const count = useSelector(state=>state.count)
    const strP = useSelector(state=> state.strP)
    const dispatch = useDispatch()
    
    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={()=>count >0 && dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>+</button>

            <input type="text" onChange={(e)=> dispatch(change(e.target.value))}/>
            <h2>{strP}</h2>
        </div>
    )
}
export default Counter