import { createStore } from "redux";
import initialReducer from "./reducer/signalReducer";

const store = createStore(initialReducer);
export default store;
