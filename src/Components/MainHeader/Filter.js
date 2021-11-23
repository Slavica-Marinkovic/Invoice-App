import React, { useState, useEffect } from 'react';
import downArrow from '../../assets/icon-arrow-down.svg';

const Filter = (props) => {
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
    <>
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
          <img
            style={{
              transform: props.openDropdown ? 'rotate(180deg)' : 'rotate(0)',
            }}
            src={downArrow}
            alt="down-arrow.svg"
          />
        </span>
      </div>
      {props.openDropdown && (
        <div className="status-modal">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="checkbox"
              id="paid"
              checked={paidChecked}
              onChange={handlePaidChange}
            ></input>
            <label htmlFor="paid">Paid</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="pending"
              checked={pendingChecked}
              onChange={handlePendingChange}
            ></input>
            <label htmlFor="pending">Pending</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="drafts"
              checked={draftsChecked}
              onChange={handleDraftsChange}
            ></input>
            <label htmlFor="drafts"> Drafts</label>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
