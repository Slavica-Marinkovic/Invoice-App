import React, { useEffect, useState } from 'react';
import './MainHeader.css';
import downArrow from '../../assets/icon-arrow-down.svg';
import iconPlus from '../../assets/icon-plus.svg';

const MainHeader = (props) => {
  const [paidChecked, setPaidChecked] = React.useState(false);
  const [pendingChecked, setPendingChecked] = React.useState(false);
  const [draftsChecked, setDraftsChecked] = React.useState(false);

  const handlePaidChange = () => {
    setPaidChecked(!paidChecked);
  };
  const handlePendingChange = () => {
    setPendingChecked(!pendingChecked);
  };
  const handleDraftsChange = () => {
    setDraftsChecked(!draftsChecked);
  };

  useEffect(() => {
    const filters = [];
    if (paidChecked) {
      filters.push('paid');
    }
    if (pendingChecked) {
      filters.push('pending');
    }
    if (draftsChecked) {
      filters.push('draft');
    }
    props.filterByStatus(filters);
  }, [paidChecked, pendingChecked, draftsChecked]);

  return (
    <div className="main-header">
      <div className="main-header-left">
        <h1>Invoices</h1>
        <p className="first-p">
          There are <span className="num-invoices">7</span> total invoices
        </p>
        <p className="second-p">
          <span className="num-invoices">7</span> invoices
        </p>
      </div>
      <div className="main-header-right">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '16px',
          }}
        >
          <p>
            Filter{' '}
            <span className="filter-span" onClick={props.openDropDown}>
              by status
            </span>
          </p>
          <span>
            <img src={downArrow} alt="down-arrow.svg" />
          </span>
        </div>
        {props.openDropdown && (
          <div class="dropdown">
            <ul>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <input
                  type="checkbox"
                  checked={paidChecked}
                  onChange={handlePaidChange}
                ></input>
                <label>Paid</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={pendingChecked}
                  onChange={handlePendingChange}
                ></input>
                <label>Pending</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={draftsChecked}
                  onChange={handleDraftsChange}
                ></input>
                <label> Drafts</label>
              </div>
            </ul>
          </div>
        )}

        <div className="status-modal">
          <div>
            <input type="checkbox" name="draft" id="draft"></input>
            <label htmlFor="draft">Draft</label>
          </div>
          <div>
            <input type="checkbox" name="pending" id="pending"></input>
            <label htmlFor="pending">Pending</label>
          </div>
          <div>
            <input type="checkbox" name="paid" id="paid"></input>
            <label htmlFor="paid">Paid</label>
          </div>
        </div>
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
