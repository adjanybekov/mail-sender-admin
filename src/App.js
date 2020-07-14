import React from 'react';
import { MailComposePage } from './pages/MailCompose';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EmailsListPage } from './pages/EmailsListPage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/compose' component={MailComposePage}/>
        <Route exact path='/list' component={EmailsListPage}/>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
