import { createStore } from "redux";
import rootReducer from "./reducer/index.js";
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("state\n", store.getState());
});
export default store;
