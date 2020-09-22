import React, { useEffect, useState } from "react";
import { MailComposePage } from "./pages/MailCompose";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { EmailsListPage } from "./pages/EmailsListPage";
import { UnsubscribePage } from "./pages/UnsubscribePage/UnsubscribePage";
// import { decorate } from "mobx";
import { PrivateRoute } from "./_components";
import { constants } from "./_constants/contstants";

function App() {
  const [authed, setAuthed] = useState(false);

  function getWithExpiry(key) {
    console.log(key);
    const itemStr = localStorage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
      return false;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    console.log("asdasd", now.getTime(), item.expiry);
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      return false;
    }
    return true;
  }

  useEffect(() => {
    var res = getWithExpiry(constants.loginKey);
    console.log(res);
    setAuthed(res);
  }, [authed]);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            authed={window.localStorage.getItem(constants.loginKey) != null} //window.localStorage.getItem("morningGlory") != null}
            exact
            path="/compose"
            component={MailComposePage}
          />
          <PrivateRoute
            authed={window.localStorage.getItem(constants.loginKey) != null}
            exact
            path="/list"
            component={EmailsListPage}
          />
          <Route
            exact
            path="/unsubscribe/:email?/:hash?"
            component={UnsubscribePage}
          />
          <Route exact path="/login" component={LoginPage} />

          <Redirect from="*" to="/compose" co />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
