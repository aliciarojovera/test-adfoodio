import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext";
import { NotifProvider } from "./context/NofifContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <NotifProvider>
          <App />
        </NotifProvider>
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
