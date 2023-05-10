import { legacy_createStore as createStore } from "redux";
import reduser from "./reducer/reducer";

const store = createStore(reduser);

export default store;