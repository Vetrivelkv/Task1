import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor, sagaMiddleware } from "./Redux/Store";

import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import watchSagas from "./Redux/Store/Sagas/index";

sagaMiddleware.run(watchSagas);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
