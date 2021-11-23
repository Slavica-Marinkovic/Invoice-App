import React from 'react';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import { store } from './store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditInvoice from './Components/EditInvoice/EditInvoice';
import InvoiceDetails from './Components/InvoiceDetails/InvoiceDetails';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={InvoiceDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
