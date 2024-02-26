import initialReducer from "./signalReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  tasks: initialReducer,
});
export default rootReducer;
