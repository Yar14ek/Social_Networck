import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>{/* это роутинг по страницам */}
    <Provider store={store}> {/* Здесь мы обернули все наше приложение провайдером чтобы доступ к стору был из любого компонента */}
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
