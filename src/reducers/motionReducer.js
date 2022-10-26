import { DRAG_IMAGE_IN_PREVIEW } from "../actions/actionTypes";

const initialState = {
  xValue: 10,
  yValue: 10,
  rotateValue: 0,
};
export const motionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAG_IMAGE_IN_PREVIEW:
      return {
        ...state,
        xValue: action.payload.xValue,
        yValue: action.payload.yValue,
      };
    default:
      return state;
  }
};
