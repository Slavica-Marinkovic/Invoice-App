import React from 'react';
import './InvoiceDetails.css';

const DetailsItem = (props) => {
  return (
    <div className="details-item">
      <div className="details-left">
        <div className="details-item-name">{props.data.name}</div>
        {/*---------------------- u span qty-price treba da ide qty pa x pa price*/}
        <span className="qty-price">
          {props.data.qty}x{props.data.price}
        </span>
        <span className="qty">{props.data.quantity}</span>
        <span className="price">${props.data.price}</span>
      </div>
      <div className="total">${props.data.total.toFixed(2)}</div>
    </div>
  );
};

export default DetailsItem;
