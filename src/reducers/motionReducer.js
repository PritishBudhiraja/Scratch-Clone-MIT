import {
  DRAG_IMAGE_IN_PREVIEW,
  MOVE_IMAGE_DOWN,
  MOVE_IMAGE_LEFT,
  MOVE_IMAGE_RIGHT,
  MOVE_IMAGE_UP,
  ROTATE_RIGHT,
  ROTATE_LEFT,
  RESET_POSITIONS,
  UPDATE_MOTION_ORDER,
} from "../actions/actionTypes";

const initialState = {
  xValue: 10,
  yValue: 40,
  rotateValue: 0,
  motionsStateSequence: [
    "MOVEUP",
    "MOVEDOWN",
    "MOVELEFT",
    "MOVERIGHT",
    "ROTATELEFT",
    "ROTATERIGHT",
    "RESET",
  ],
};
export const motionReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case DRAG_IMAGE_IN_PREVIEW:
      return {
        ...state,
        xValue: payload.xValue,
        yValue: payload.yValue,
      };
    case MOVE_IMAGE_UP:
      return {
        ...state,
        yValue: state.yValue - payload.yValue,
      };
    case MOVE_IMAGE_DOWN:
      return {
        ...state,
        yValue: state.yValue + payload.yValue,
      };
    case MOVE_IMAGE_LEFT:
      return {
        ...state,
        xValue: state.xValue - payload.xValue,
      };
    case MOVE_IMAGE_RIGHT:
      return {
        ...state,
        xValue: state.xValue + payload.xValue,
      };
    case ROTATE_RIGHT:
      return {
        ...state,
        rotateValue: state.rotateValue + payload.rotateValue,
      };
    case ROTATE_LEFT:
      return {
        ...state,
        rotateValue: state.rotateValue - payload.rotateValue,
      };
    case RESET_POSITIONS: {
      return { ...initialState };
    }
    case UPDATE_MOTION_ORDER: {
      return {
        ...state,
        motionsStateSequence: [...payload.motionsStateSequence],
      };
    }
    default:
      return state;
  }
};
