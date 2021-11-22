import React from 'react';
import './InvoiceItemView.css';
import rightArrow from '../../assets/icon-arrow-right.svg';
import { useHistory } from 'react-router-dom';

const InvoiceItemView = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = props.data.id;
    history.push(path);
  };

  return (
    <div className="invoice-list" onClick={routeChange}>
      <div className="invoice-item-container">
        <div className="id">
          <span>#</span>
          {props.data.id}
        </div>
        <div className="date">Due {props.data.paymentDue}</div>
        <div className="client-name">{props.data.clientName}</div>
        <div className="amount">${props.data.total}</div>
        <div className="status-wrapper">
          <div className={props.data.status}>
            <span></span>
            <p>{props.data.status}</p>
          </div>
          <div className="arrow-img">
            <img src={rightArrow} alt="right-arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceItemView;
