import React from "react";
import { MailComposePage } from "./pages/MailCompose";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EmailsListPage } from "./pages/EmailsListPage";
import { UnsubscribePage } from "./pages/UnsubscribePage/UnsubscribePage";
// import { decorate } from "mobx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/compose" component={MailComposePage} />
          <Route exact path="/list" component={EmailsListPage} />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/unsubscribe/:email?/:hash?"
            component={UnsubscribePage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
