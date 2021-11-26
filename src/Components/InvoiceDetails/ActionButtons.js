import React, { useState } from 'react';

const ActionButtons = (props) => {
  return (
    <div className="action-btns">
      <button
        className={`btn action-edit ${props.disabled ? 'disabled' : ''}`}
        onClick={props.editInvoice}
        disabled={props.disabled}
      >
        Edit
      </button>
      <button className="btn action-delete" onClick={props.openModalFn}>
        Delete
      </button>
      <button
        className={`btn action-mark-paid ${
          props.disabledMark ? 'disabled-paid' : ''
        }`}
        onClick={props.markPaid}
        disabled={props.disabledMark}
      >
        Mark as Paid
      </button>
    </div>
  );
};

export default ActionButtons;
