import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import iconDelete from '../../../assets/icon-delete.svg';
import * as actions from '../../../store/actions/actions';

const Item = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(props.data.id);
  const [name, setName] = useState(props.data.name);
  const [qty, setQty] = useState(props.data.quantity);
  const [price, setPrice] = useState(props.data.price);
  const [total, setTotal] = useState(props.data.total);

  useEffect(() => {
    dispatch(actions.saveItem(name, qty, price, total, id));
  }, [name, qty, price, total]);

  return (
    <>
      <div className="item-name">
        <input
          type="text"
          name="item-name"
          className={`input-item-name ${name === '' ? props.errorClass : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="item-qty">
        <input
          type="text"
          name="item-qty"
          className={`input-item-qty ${
            qty === '' || qty == 0 ? props.errorClass : ''
          }`}
          value={qty == 0 ? '' : qty}
          onChange={(e) => {
            if (isNaN(e.target.value)) {
              return;
            }
            setTotal(price * qty);
            setQty(e.target.value);
          }}
        />
      </div>
      <div className="item-price">
        <input
          type="text"
          name="item-price"
          className={`input-item-price ${
            price === '' || price == 0 ? props.errorClass : ''
          }`}
          value={price == 0 ? '' : price}
          onChange={(e) => {
            if (isNaN(e.target.value)) {
              return;
            }
            setTotal(price * qty);
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="item-total">
        <input
          type="text"
          disabled
          name="item-total"
          className="input-item-total"
          value={(price * qty).toFixed(2)}
        />
      </div>
      <div
        className="item-delete"
        onClick={() => dispatch(actions.deleteItems(id))}
      >
        <img src={iconDelete} alt="icon-delete.svg" />
      </div>
    </>
  );
};

export default Item;
