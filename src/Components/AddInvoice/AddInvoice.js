import React from "react";
import "./AddInvoice.css";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";
import iconDelete from "../../assets/icon-delete.svg";

const AddInvoice = () => {
    return (
        <div className="add-form-content">
        <div className="go-back">
          <img src={arrowLeft} alt="icon-arrow-left.svg" />
          <span>Go back</span>
        </div>
        <h1>New Invoice</h1>
        <p className="bill">Bill From</p>
        <form>
          <label htmlFor="street-from" className="labels">Street Address</label>
          <input type="text" name="street-from" className="input-street-from" />
          <div className="place">
            <div>
              <label htmlFor="city" className="labels">City</label>
              <input type="text" className="input-city" name="city" />
            </div>
            <div>
              <label htmlFor="post-code" className="labels">Post Code</label>
              <input type="text" className="input-post-code" name="post-code" />
            </div>
            <div>
              <label htmlFor="country" className="labels">Country</label>
              <input type="text" className="input-country" name="country" />
            </div>
          </div>
          <p className="bill">Bill to</p>
          <label htmlFor="client-name" className="labels">Client's Name</label>
          <input type="text" name="client-name" className="input-client-name" />
          <label htmlFor="client-email" className="labels">Client's Email</label>
          <input type="text" name="client-email" className="input-client-email" placeholder="e.g. email@example.com" />
          <label htmlFor="street-to" className="labels">Street Address</label>
          <input type="text" name="street-to" className="input-street-to" />
          <div className="place">
            <div>
              <label htmlFor="city-client" className="labels">City</label>
              <input type="text" className="input-city-client" name="city-client" />
            </div>
            <div>
              <label htmlFor="post-code-client" className="labels">Post Code</label>
              <input type="text" className="input-post-code-client" name="post-code-client" />
            </div>
            <div>
              <label htmlFor="country-client" className="labels">Country</label>
              <input type="text" className="input-country-client" name="country-client" />
            </div>
          </div>
          <div className="date-terms">
            <div>
              <label htmlFor="invoice-date" className="labels">Invoice Date</label>
              <input type="date" className="input-invoice-date" name="invoice-date" />
            </div>
            <div style={{position: 'relative'}}>
              <label htmlFor="payment-terms" className="labels">Payment Terms</label>
              <div className="select-dropdown">
                <input readOnly defaultValue="Net 7 Days" type="text" className="input-payment-terms" name="payment-terms" />
                <img src={arrowDown} alt="down-arrow" />
              </div>
              <div className="dropdown-items">
                <div className="dropdown-option">Net 1 Day</div>
                <div className="dropdown-option">Net 7 Days</div>
                <div className="dropdown-option">Net 14 Days</div>
                <div className="dropdown-option">Net 30 Days</div>
              </div>
            </div>
          </div>
          <label htmlFor="project-description" className="labels">Project Description</label>
          <input type="text" placeholder="e.g. Graphic Design Service" className="input-project-description" name="project-description" />
          <h2>Item List</h2>
          <div className="item-list-wrapper">
            <div className="item-list-header">
              <label htmlFor="item-name" className="labels">Item Name</label>
              <label htmlFor="item-qty" className="labels">Qty.</label>
              <label htmlFor="item-price" className="labels">Price</label>
              <label htmlFor="item-total" className="labels">Total</label>
            </div>
            <div className="item-list-container">
              <div className="item-name">
                <input type="text" name="item-name" className="input-item-name" />
              </div>
              <div className="item-qty">
                <input type="text" name="item-qty" className="input-item-qty" />
              </div>
              <div className="item-price">
                <input type="text" name="item-price" className="input-item-price" />
              </div>
              <div className="item-total">
                <input type="text" disabled name="item-total" className="input-item-total" defaultValue={1950.00} />
              </div>
              <div className="item-delete">
                <img src={iconDelete} alt="icon-delete.svg" />
              </div>
            </div>
            <button className="add-new-item">+ Add New Item</button>
          </div>
          <div className="add-form-bottom">
            <button className="discard">Discard</button>
            <div className="save-btns">
              <button className="save-draft">Save as Draft</button>
              <button className="save-send">Save &amp; Send</button>
            </div>
          </div>
        </form>
      </div>
      
    )
}

export default AddInvoice;