import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import "../css/animate.css";
import game from "./reducer/game";
import cube from "./reducer/cube";
import Board from "./container/board";

const reducer = combineReducers({ game, cube });
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Board />
        </Provider>
      </div>
    );
  }
}
