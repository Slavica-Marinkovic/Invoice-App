import React from "react";
import "./InvoiceDetails.css";
import arrowLeft from "../../assets/icon-arrow-left.svg";

const InvoiceDetails = () => {
    return (
        <div className="invoice-details-wrapper">
        <div className="invoice-details">
          <div className="details-go-back">
            <img src={arrowLeft}  alt="left-arrow.svg"/>
            <span>Go back</span>
          </div>
          <div className="details-header">
            <div className="details-status">
              <span>Status</span>
              <div className="paid">
                <span />
                <p>Paid</p>
              </div>
            </div>
            <div className="action-btns">
              <button className="btn action-edit">Edit</button>
              <button className="btn action-delete">Delete</button>
              <button className="btn action-mark-paid">Mark as Paid</button>
            </div>
          </div>
          <div className="details-main">
            <div className="id-description-address">
              <div className="id-description">
                <div className="details-id"><span>#</span>XM9141</div>
                <span className="description">Graphic Design</span>
              </div>
              <div className="sender-address">
                <span className="sender-street">19 Union Terrace</span>
                <span className="sender-city">London</span>
                <span className="sender-postcode">E13EZ</span>
                <span className="sender-country">United Kingdom</span>
              </div>
            </div>
            <div className="date-client-mail">
              <div className="details-date">
                <div>
                  <span>Invoice Date</span>
                  <p className="invoice-date">21 Aug 2021</p>
                </div>
                <div>
                  <span>Payment Due</span>
                  <p className="payment-due">20 Sep 2021</p>
                </div>
              </div>
              <div className="client">
                <span>Bill to</span>
                <p className="details-client-name">Alex Grim</p>
                <div className="client-address">
                  <span className="client-street">84 Church Way</span>
                  <span className="client-city">Bradford</span>
                  <span className="client-postcode">BD19PB</span>
                  <span className="client-country">United Kingdom</span>
                </div>
              </div>
              <div className="mail">
                <span>Sent to</span>
                <p className="client-mail">alexgrim@mail.com</p>
              </div>
            </div>
            <div className="items-prices">
              <div className="items-title">
                <span>Item Name</span>
                <span>QTY.</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              <div className="details-item">
                <div className="details-left">
                  <div className="details-item-name">Banner Design</div>
                  {/*---------------------- u span qty-price treba da ide qty pa x pa price*/}                            
                  <span className="qty-price">qty and price</span>
                  <span className="qty">1</span>
                  <span className="price">$156.00</span>
                </div>
                <div className="total">$156.00</div>
              </div>
            </div>
            <div className="sum">
              <div>Amount Due</div>
              <div className="invoice-amount">$ 556.00</div>
            </div>
          </div>
        </div>
      </div>

    ) 
}
export default InvoiceDetails