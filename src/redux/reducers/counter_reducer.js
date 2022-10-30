import { INC,DEC ,INC_BY_VALUE,DEC_BY_VALUE} from "../actions/types";
  
const counter_reducer=(state={count:0},action)=>{
 switch(action.type)
{
    case INC:return {...state,count:state.count+1};
    case DEC:return {...state,count:state.count-1};
    case INC_BY_VALUE:return {...state,count:state.count+action.payload};
    case DEC_BY_VALUE:return {...state,count:state.count-action.payload};
    default:return state;
}
}
export default counter_reducer;