import React from 'react';
import './StatusView.css';

const StatusView = () => {
  return (
    <div>
      <div className="paid">
        <span></span>
        <p>Paid</p>
      </div>
      <div className="pending">
        <span></span>
        <p>Pending</p>
      </div>
      <div className="draft">
        <span></span>
        <p>Draft</p>
      </div>
    </div>
  );
};

export default StatusView;
