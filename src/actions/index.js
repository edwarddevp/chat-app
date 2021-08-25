import * as types from "../constants/ActionsTypes";

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
});

export const addUser = (name) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
});

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
});

export const populateUserList = (users) => ({
  type: types.USER_LIST,
  users,
});

export const openSocket = () => ({
  type: types.OPEN_SOCKET,
});

export const closeSocket = () => ({
  type: types.CLOSE_SOCKET,
});
