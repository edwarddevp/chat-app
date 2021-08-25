import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import socket from "./socket";

const chat = combineReducers({
  messages,
  users,
  socket,
});

export default chat;
