import * as types from "../constants/ActionsTypes";

const initialValue = {
  isConnected: false,
};

const socket = (state = initialValue, action) => {
  switch (action.type) {
    case types.OPEN_SOCKET:
      return {
        ...state,
        isConnected: true,
      };

    case types.CLOSE_SOCKET:
      return {
        ...state,
        isConnected: false,
      };

    default:
      return state;
  }
};

export default socket;
