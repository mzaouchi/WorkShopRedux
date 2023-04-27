import { CHANGE, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

const initialSate = {
    count : 0,
    strP : "",
    show : false
}

const Reducer=(state = initialSate,action)=>{
    switch (action.type) {
       case INCREMENT : return {...state,count : state.count+1}
       case DECREMENT : return {...state, count :state.count -1 }
       case CHANGE : return {...state, strP : action.payload }
       case HANDLESHOW : return {...state, show : !state.show} 
        default: return state
    }
}

export default Reducer