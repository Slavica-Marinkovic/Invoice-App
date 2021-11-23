import React, { useEffect, useState } from 'react';
import './MainHeader.css';
import downArrow from '../../assets/icon-arrow-down.svg';
import iconPlus from '../../assets/icon-plus.svg';
import Filter from './Filter';

const MainHeader = (props) => {
  return (
    <div className="main-header">
      <div className="main-header-left">
        <h1>Invoices</h1>
        <p className="first-p">
          There are <span className="num-invoices">{props.data.length}</span>{' '}
          total invoices
        </p>
        <p className="second-p">
          <span className="num-invoices">7</span> invoices
        </p>
      </div>
      <div className="main-header-right">
        <Filter
          openDropDown={props.openDropDown}
          openDropdown={props.openDropdown}
          filterByStatus={props.filterByStatus}
        />
        <div className="newInvoice-btn" onClick={props.updateNav}>
          <img src={iconPlus} alt="icon-plus.svg" />
          <span className="newInvoice">
            New <span className="second-span">Invoice</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
