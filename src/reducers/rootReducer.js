import { combineReducers } from "redux";
import { actionReducer } from "./actionReducer";
import { motionReducer } from "./motionReducer";
import { looksReducer } from "./looksReducer";
import { eventReducer } from "./eventReducer";
import { midAreaReducer } from "./midAreaReducer";

export const rootReducer = combineReducers({
  actionReducer,
  motionReducer,
  looksReducer,
  eventReducer,
  midAreaReducer,
});
