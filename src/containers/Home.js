import React, { useEffect, useState, useRef } from 'react';
import AddInvoice from '../Components/AddInvoice/AddInvoice';
import Header from '../Components/Header/Header';
import InvoiceItemView from '../Components/InvoiceItemView/InvoiceItemView';
import MainHeader from '../Components/MainHeader/MainHeader';
import StatusView from '../Components/StatusView/StatusView';
import EditInvoice from '../Components/EditInvoice/EditInvoice';
import Empty from '../Components/Empty/Empty-invoices';
import BackDrop from '../Components/BackDrop/Backdrop';

import { useSelector } from 'react-redux';
import DeleteItem from '../Components/DeleteItems/DeleteItem';
import InvoiceDetails from '../Components/InvoiceDetails/InvoiceDetails';
import Transparent from '../Components/Transparent/Transparent';

const Home = () => {
  const data = useSelector((state) => state.invoice.invoice);

  const [navOpen, setNavOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [alert, setAlert] = useState(false);

  const openDropDown = () => {
    if (openDropdown) {
      setOpenDropdown(false);
      return;
    }
    setOpenDropdown(true);
  };

  const updateNavOpen = () => {
    setNavOpen(true);
  };

  const updateNavClose = () => {
    setNavOpen(false);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  const filterByStatus = (filters) => {
    if (filters.length === 0) {
      setFilteredData(data);
      return;
    }

    const newData = [];
    data.map((item) => {
      if (filters.some((v) => item.status.includes(v))) {
        newData.push(item);
      }
    });
    setFilteredData(newData);
  };

  const saveDraft = () => {};

  const saveSend = () => {};

  useEffect(() => {
    if (alert) {
      setOpenDropdown(false);
    }
    setFilteredData(data);
  }, [alert, data]);

  return (
    <div>
      {openDropdown ? <Transparent close={closeDropdown} /> : null}
      {navOpen ? <BackDrop close={updateNavClose} /> : null}
      {navOpen ? (
        <AddInvoice
          updateNav={updateNavClose}
          saveDraft={saveDraft}
          saveSend={saveSend}
        />
      ) : null}
      <Header />
      <div
        onClick={(e) => {
          if (navOpen) {
            setNavOpen(false);
          }
        }}
      >
        <MainHeader
          updateNav={updateNavOpen}
          filterByStatus={filterByStatus}
          openDropDown={openDropDown}
          openDropdown={openDropdown}
          data={data}
        />
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            return <InvoiceItemView data={item} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default Home;
