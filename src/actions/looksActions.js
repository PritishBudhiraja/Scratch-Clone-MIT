import {
  HIDE_CATSPRITE,
  SHOW_CATSPRITE,
  SET_SIZE_CATSPRITE,
  SET_THINK_CLOUD_VISIBLE,
  SET_THINK_CLOUD_MESSAGE,
  SET_THINK_CLOUD_NOT_VISIBLE,
  UPDATE_LOOKS_ORDER,
} from "./actionTypes";

export const showCatsprite = () => ({
  type: SHOW_CATSPRITE,
});

export const hideCatsprite = () => ({
  type: HIDE_CATSPRITE,
});

export const setSizeOfCatsprite = (payload) => ({
  type: SET_SIZE_CATSPRITE,
  payload,
});

export const setIsThinkCloudVisible = () => ({
  type: SET_THINK_CLOUD_VISIBLE,
});

export const setThinkCloudMessage = (payload) => ({
  type: SET_THINK_CLOUD_MESSAGE,
  payload,
});

export const setIsThinkCloudNotVisible = () => ({
  type: SET_THINK_CLOUD_NOT_VISIBLE,
});

export const updateLooksOrder = (payload) => ({
  type: UPDATE_LOOKS_ORDER,
  payload,
});
