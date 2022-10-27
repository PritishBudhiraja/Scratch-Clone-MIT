import { ADD_NEW_STACK, UPDATE_EXISTING_LIST } from "./actionTypes";

export const addNewStack = () => ({
  type: ADD_NEW_STACK,
});

export const updateExistingList = (payload) => ({
  type: UPDATE_EXISTING_LIST,
  payload,
});
