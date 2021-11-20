import React from 'react';
import AddInvoice from './Components/AddInvoice/AddInvoice';
import Header from './Components/Header/Header';
import InvoiceItemView from './Components/InvoiceItemView/InvoiceItemView';
import MainHeader from './Components/MainHeader/MainHeader';
import StatusView from './Components/StatusView/StatusView';
import EditInvoice from './Components/EditInvoice/EditInvoice';
import data from './data.json';

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  const updateNavOpen = () => {
    setNavOpen(true);
  };

  const updateNavClose = () => {
    setNavOpen(false);
  };

  return (
    <>
      {navOpen ? <AddInvoice updateNav={updateNavClose} /> : null}
      <Header />
      <div
        style={{ opacity: navOpen ? '0.5' : '1' }}
        onClick={() => {
          if (navOpen) {
            setNavOpen(false);
          }
        }}
      >
        <MainHeader updateNav={updateNavOpen} />
        {data.map((item) => {
          return <InvoiceItemView data={item} />;
        })}
        <StatusView />
      </div>
    </>
  );
};

export default App;
