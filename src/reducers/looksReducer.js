import {
  HIDE_CATSPRITE,
  SHOW_CATSPRITE,
  SET_SIZE_CATSPRITE,
  SET_THINK_CLOUD_VISIBLE,
  SET_THINK_CLOUD_NOT_VISIBLE,
  SET_THINK_CLOUD_MESSAGE,
  UPDATE_LOOKS_ORDER,
} from "../actions/actionTypes";

const initialState = {
  isCatspriteVisible: true,
  size: 0,
  isThinkCloudVisible: false,
  thinkCloudMessage: "Hmm",
  looksStateSequence: [
    "SHOW",
    "HIDE",
    "SIZE",
    "THINK_CLOUD",
    "HIDE_THINK_CLOUD",
    "THINK_WITH_TIMER",
  ],
};
export const looksReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case HIDE_CATSPRITE: {
      return {
        ...state,
        isCatspriteVisible: false,
      };
    }
    case SHOW_CATSPRITE: {
      return {
        ...state,
        isCatspriteVisible: true,
      };
    }
    case SET_SIZE_CATSPRITE: {
      return {
        ...state,
        size: state.size + payload,
      };
    }
    case SET_THINK_CLOUD_VISIBLE: {
      return {
        ...state,
        isThinkCloudVisible: true,
      };
    }
    case SET_THINK_CLOUD_MESSAGE: {
      return {
        ...state,
        thinkCloudMessage: payload,
      };
    }
    case SET_THINK_CLOUD_NOT_VISIBLE: {
      return {
        ...state,
        isThinkCloudVisible: false,
      };
    }
    case UPDATE_LOOKS_ORDER: {
      return {
        ...state,
        looksStateSequence: [...payload.looksStateSequence],
      };
    }
    default:
      return state;
  }
};
