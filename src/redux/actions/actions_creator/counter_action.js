//action creater is a function return action
import { DEC, DEC_BY_VALUE, INC ,INC_BY_VALUE} from './../types';
 
export const inc_action=(action_dispatching)=>{
//dispatching and action creator together
    return action_dispatching({
    type:INC
})
}
export const dec_action=()=>{
    return{
        type:DEC
    }
    }
    export const inc_action_by_val=(val)=>{
        return{
            type:INC_BY_VALUE,
            payload:val
        }
        }
    export const dec_action_by_val=(val,action_dispathing)=>{
        return action_dispathing({
            type:DEC_BY_VALUE,
            payload:val
        })
        }
  