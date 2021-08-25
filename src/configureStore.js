import { createStore, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import setupSocket from "./sockets";
import handleNewMessage from "./sagas";
import username from "./utils/name";
import reducers from "./reducers";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSageMiddleware();

  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducers, composedEnhancers);

  const socket = setupSocket(store.dispatch, username);
  sagaMiddleware.run(handleNewMessage, { socket, username });

  return store;
}
