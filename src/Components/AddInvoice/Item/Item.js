import React from 'react';
import iconDelete from '../../../assets/icon-delete.svg';

const Item = (props) => {
  return (
    <>
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
        <input
          type="text"
          disabled
          name="item-total"
          className="input-item-total"
          defaultValue={1950.0}
        />
      </div>
      <div
        className="item-delete"
        onClick={() => props.removeLastItem(props.id)}
      >
        <img src={iconDelete} alt="icon-delete.svg" />
      </div>
    </>
  );
};

export default Item;
