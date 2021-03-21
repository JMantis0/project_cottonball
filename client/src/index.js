import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="jmantis-auth.us.auth0.com"
    clientId="aNLTSSORpHeSWRsFxjwoTikI5BriwnCn"
    redirectUri="https://test-cottonball-auth0.herokuapp.com/"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
registerServiceWorker();
