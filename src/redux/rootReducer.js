import { combineReducers, createStore } from "redux";
import {BaiTapFormValidationReducer} from "./reducer/BaiTapFormValidationReducer";

const rootReducer = combineReducers({
  BaiTapFormValidationReducer,
});

export const store = createStore(rootReducer);
