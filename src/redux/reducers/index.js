import { combineReducers } from "redux";
import counter_reducer from "./counter_reducer";

export default combineReducers({
    counter:counter_reducer
})