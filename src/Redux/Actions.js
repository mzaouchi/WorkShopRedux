import { CHANGE, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

export const increment=()=>{
    return(
        {
            type : INCREMENT
        }
    )
}





export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const change=(payload)=>{
    return(
        {
            type : CHANGE,
            payload
        }
    )
}

export const handleShow=()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
} 




