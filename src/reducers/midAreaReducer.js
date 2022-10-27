import { ADD_NEW_STACK, UPDATE_EXISTING_LIST } from "../actions/actionTypes";

const initialState = {
  stackOfEvents: [
    {
      id: 0,
      actionLists: [],
    },
  ],
};
export const midAreaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_STACK: {
      const newStackList = [
        {
          id: state.stackOfEvents.length,
          actionLists: [],
        },
      ];
      return {
        ...state,
        stackOfEvents: [...state.stackOfEvents, ...newStackList],
      };
    }
    case UPDATE_EXISTING_LIST: {
      const toBeChangeList = state.stackOfEvents[payload.indexToBeChanged];
      toBeChangeList.actionLists = [...payload.newActionList];
      return {
        ...state,
      };
    }
    default:
      return initialState;
  }
};
