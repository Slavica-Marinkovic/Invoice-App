import React, { useEffect, useState } from 'react';
import './AddInvoice.css';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import arrowDown from '../../assets/icon-arrow-down.svg';
import Item from './Item/Item';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions';

const AddInvoice = (props) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientPostCode, setClientPostCode] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  const [date, setDate] = useState();
  const [description, setDescription] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownChoice, setDropdownChoice] = useState(7);
  const items = useSelector((state) => state.invoice.items);

  const openDropDown = () => {
    if (openDropdown) {
      setOpenDropdown(false);
      return;
    }
    setOpenDropdown(true);
    console.log(openDropdown);
  };

  const saveDraft = () => {
    props.updateNav();

    dispatch(
      actions.saveDraft(
        'draft',
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
        items
      )
    );
  };

  const saveSend = () => {
    props.updateNav();
    dispatch(
      actions.saveSend(
        'pending',
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
        items
      )
    );
  };

  return (
    <div className="add-form-content">
      <div className="go-back">
        <img src={arrowLeft} alt="icon-arrow-left.svg" />
        <span>Go back</span>
      </div>
      <h1>New Invoice</h1>
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          name="street-from"
          className="input-street-from"
        />
        <div className="place">
          <div>
            <label htmlFor="city" className="labels">
              City
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="input-city"
              name="city"
            />
          </div>
          <div>
            <label htmlFor="post-code" className="labels">
              Post Code
            </label>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              type="text"
              className="input-post-code"
              name="post-code"
            />
          </div>
          <div>
            <label htmlFor="country" className="labels">
              Country
            </label>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className="input-country"
              name="country"
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
                value={
                  'Net ' +
                  dropdownChoice +
                  (dropdownChoice === 1 ? ' day' : ' days')
                }
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
            {items.map((item) => {
              return <Item key={item.id} data={item} />;
            })}
          </div>
          <button
            className="add-new-item"
            onClick={() => dispatch(actions.addItems())}
          >
            + Add New Item
          </button>
        </div>
        <div className="add-form-bottom">
          <button className="discard" onClick={props.updateNav}>
            Discard
          </button>
          <div className="save-btns">
            <button className="save-draft" onClick={saveDraft}>
              Save as Draft
            </button>
            <button className="save-send" onClick={saveSend}>
              Save &amp; Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddInvoice;
