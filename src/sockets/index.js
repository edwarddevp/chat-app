import * as types from "../constants/ActionsTypes";
import {
  addUser,
  closeSocket,
  messageReceived,
  openSocket,
  populateUserList,
} from "../actions";

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket("ws://localhost:8989");
  socket.onopen = () => {
    dispatch(openSocket());
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username,
      })
    );
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author));
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name));
        break;
      case types.USER_LIST:
        console.log("users", data.users);
        dispatch(populateUserList(data.users));
        break;
      default:
        break;
    }
  };

  socket.onclose = () => {
    dispatch(closeSocket());
  };
  return socket;
};

export default setupSocket;
