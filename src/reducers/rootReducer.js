import { combineReducers } from "redux";
import { actionReducer } from "./actionReducer";
import { motionReducer } from "./motionReducer";
import { looksReducer } from "./looksReducer";
import { eventReducer } from "./eventReducer";

export const rootReducer = combineReducers({
  actionReducer,
  motionReducer,
  looksReducer,
  eventReducer,
});
