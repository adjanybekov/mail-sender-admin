import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider, useLocalStore } from "mobx-react";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    emails: [],
    filter: "filterizatioasdadsn",
    addEmail: (email) => {
      store.emails.push(email);
    },
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export { StoreContext };

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
