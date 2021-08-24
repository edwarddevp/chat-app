import * as types from '../constants/ActionsTypes'
import {addUser, messageReceived, populateUserList} from '../actions'

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8989')

  socket.onOpen
}