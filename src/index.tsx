import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import { AppState, store } from "./store";
import { Store } from "redux";
import "semantic-ui-css/semantic.min.css";

interface IProps {
  store: Store<AppState>;
}

const Root: React.SFC<IProps> = (props) => {
  return (
    <Provider store={props.store}>
      <Router>
        <App>{routes}</App>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
