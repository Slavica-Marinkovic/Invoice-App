import React, { useEffect, useState } from 'react';
import './EditInvoice.css';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import arrowDown from '../../assets/icon-arrow-down.svg';
import iconDelete from '../../assets/icon-delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../AddInvoice/Item/Item';
import * as actions from '../../store/actions/actions';

const EditInvoice = ({ invoice, close }) => {
  const [address, setAddress] = useState(invoice.senderAddress.street);
  const [city, setCity] = useState(invoice.senderAddress.city);
  const [postalCode, setPostalCode] = useState(invoice.senderAddress.postCode);
  const [country, setCountry] = useState(invoice.senderAddress.country);
  const [name, setName] = useState(invoice.clientName);
  const [clientAddress, setClientAddress] = useState(
    invoice.clientAddress.street
  );
  const [clientEmail, setClientEmail] = useState(invoice.clientEmail);
  const [clientCity, setClientCity] = useState(invoice.clientAddress.city);
  const [clientPostCode, setClientPostCode] = useState(
    invoice.clientAddress.postCode
  );
  const [clientCountry, setClientCountry] = useState(
    invoice.clientAddress.country
  );
  const [date, setDate] = useState(invoice.createdAt);
  const [description, setDescription] = useState(invoice.description);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownChoice, setDropdownChoice] = useState(invoice.paymentTerms);
  const [items, setItems] = useState(invoice.items);
  const [re, setRe] = useState(1);
  const dispatch = useDispatch();
  const myItems = useSelector((state) => state.invoice.items);
  const data = useSelector((state) => state.invoice.invoice);

  useEffect(() => {
    dispatch(actions.setItems(invoice.items));
  }, []);

  useEffect(() => {
    setItems(myItems);
  }, [myItems]);

  useEffect(() => {
    setRe(re + 1);
  }, [data]);

  const openDropDown = () => {
    if (openDropdown) {
      setOpenDropdown(false);
      return;
    }
    setOpenDropdown(true);
  };

  const saveChanges = () => {
    dispatch(
      actions.saveChanges(
        invoice.status,
        address,
        city,
        postalCode,
        country,
        name,
        clientAddress,
        clientEmail,
        clientCity,
        clientPostCode,
        clientCountry,
        date,
        description,
        dropdownChoice,
        items,
        invoice.createdAt,
        invoice.id
      )
    );
    close();
  };

  return (
    <div className="edit-form-content">
      <div className="go-back">
        <img src={arrowLeft} alt="icon-arrow-left.svg" />
        <span>Go back</span>
      </div>
      <div>
        <div className="invoice-id">
          Edit <span>#</span>
          {invoice.id}
        </div>
      </div>
      <p className="bill">Bill From</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="street-from" className="labels">
          Street Address
        </label>
        <input
          type="text"
          name="street-from"
          className="input-street-from"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="place">
          <div>
            <label htmlFor="city" className="labels">
              City
            </label>
            <input
              type="text"
              className="input-city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="post-code" className="labels">
              Post Code
            </label>
            <input
              type="text"
              className="input-post-code"
              name="post-code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country" className="labels">
              Country
            </label>
            <input
              type="text"
              className="input-country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <p className="bill">Bill to</p>
        <label htmlFor="client-name" className="labels">
          Client's Name
        </label>
        <input
          type="text"
          name="client-name"
          className="input-client-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="client-email" className="labels">
          Client's Email
        </label>
        <input
          type="text"
          name="client-email"
          className="input-client-email"
          placeholder="e.g. email@example.com"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />
        <label htmlFor="street-to" className="labels">
          Street Address
        </label>
        <input
          type="text"
          name="street-to"
          className="input-street-to"
          value={clientAddress}
          onChange={(e) => setClientAddress(e.target.value)}
        />
        <div className="place">
          <div>
            <label htmlFor="city-client" className="labels">
              City
            </label>
            <input
              type="text"
              className="input-city-client"
              name="city-client"
              value={clientCity}
              onChange={(e) => setClientCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="post-code-client" className="labels">
              Post Code
            </label>
            <input
              type="text"
              className="input-post-code-client"
              name="post-code-client"
              value={clientPostCode}
              onChange={(e) => setClientPostCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country-client" className="labels">
              Country
            </label>
            <input
              type="text"
              className="input-country-client"
              name="country-client"
              value={clientCountry}
              onChange={(e) => setClientCountry(e.target.value)}
            />
          </div>
        </div>
        <div className="date-terms">
          <div>
            <label htmlFor="invoice-date" className="labels">
              Invoice Date
            </label>
            <input
              type="date"
              className="input-invoice-date"
              name="invoice-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <label htmlFor="payment-terms" className="labels">
              Payment Terms
            </label>
            <div className="select-dropdown" onClick={openDropDown}>
              <input
                readOnly
                value={`Net ${dropdownChoice} ${
                  dropdownChoice === 1 ? 'Day' : 'Days'
                }`}
                type="text"
                className="input-payment-terms"
                name="payment-terms"
              />
              <img src={arrowDown} alt="down-arrow" />
            </div>
            {openDropdown && (
              <div className="dropdown-items-fix">
                <div
                  className="dropdown-option"
                  onClick={() => {
                    setOpenDropdown(false);
                    setDropdownChoice(1);
                  }}
                >
                  Net 1 Day
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => {
                    setOpenDropdown(false);
                    setDropdownChoice(7);
                  }}
                >
                  Net 7 Days
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => {
                    setOpenDropdown(false);
                    setDropdownChoice(14);
                  }}
                >
                  Net 14 Days
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => {
                    setOpenDropdown(false);
                    setDropdownChoice(30);
                  }}
                >
                  Net 30 Days
                </div>
              </div>
            )}
          </div>
        </div>
        <label htmlFor="project-description" className="labels">
          Project Description
        </label>
        <input
          type="text"
          placeholder="e.g. Graphic Design Service"
          className="input-project-description"
          name="project-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h2>Item List</h2>
        <div className="item-list-wrapper">
          <div className="item-list-header">
            <label htmlFor="item-name" className="labels">
              Item Name
            </label>
            <label htmlFor="item-qty" className="labels">
              Qty.
            </label>
            <label htmlFor="item-price" className="labels">
              Price
            </label>
            <label htmlFor="item-total" className="labels">
              Total
            </label>
          </div>
          <div className="item-list-container">
            {items.map((item) => (
              <Item key={item.id} data={item} />
            ))}
          </div>
          <button
            className="add-new-item"
            onClick={() => dispatch(actions.addItems())}
          >
            + Add New Item
          </button>
        </div>
        <div className="edit-form-bottom">
          <button className="cancel" onClick={close}>
            Cancel
          </button>
          <button className="save-send" onClick={saveChanges}>
            Save &amp; Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditInvoice;
