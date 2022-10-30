//import  { useState } from "react";

import { useSelector ,useDispatch} from "react-redux";
import { dec_action, dec_action_by_val, inc_action } from './../redux/actions/actions_creator/counter_action';
import { useEffect, useState } from 'react';
import { inc_action_by_val } from './../redux/actions/actions_creator/counter_action';
 
export default function Counter(){
    // const [counter,dispatchCounter]=useState(0);
    const [value,setValue]=useState(0);
    useEffect(()=>{
        console.log(value);
    })
    const {count}=useSelector(state=>state.counter);
    const dispatch_action=useDispatch();
    const handelInc=()=>{
        // dispatchCounter(counter+1)
        //dispatching using thunk 
        //thunk is a way of dispatching action within theaction creator
     inc_action(dispatch_action) 
    }
    const handleDec=()=>{
        // counter>0?dispatchCounter(counter-1): dispatchCounter(counter)  ;
        dispatch_action(dec_action())
    }
    const handelInc_by_val=()=>{
        dispatch_action(inc_action_by_val(value))
    }
    const handleDec_by_val=()=>{
         //dispatching using thunk 
        //thunk is a way of dispatching action within theaction creator
     
  dec_action_by_val(value,dispatch_action) 
    }
    return(
        <>
        <p>{count}</p>
        <button onClick={handelInc}>+</button>
        <span> -----------</span>
        <button onClick={handleDec}>-</button>
        <br/>
         value: <input value={value}  onInput={(e)=>{
            isFinite( e.target.value)&&!(isNaN( e.target.value))?setValue(parseInt(e.target.value) ):setValue(  value);
            }} />
               <br/>
         <button onClick={handelInc_by_val}>inc by value</button>
        <span> -----------</span>
        <button onClick={handleDec_by_val}>dec by value</button>
        </>
    );
}