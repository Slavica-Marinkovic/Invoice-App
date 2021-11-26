import React from 'react';
import { useDispatch } from 'react-redux';
import './DeleteItem.css';
import * as actions from '../../store/actions/actions';
import { useHistory } from 'react-router';

function Delete(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteInvoice = () => {
    dispatch(actions.deleteInvoice(props.id));
    history.goBack();
  };
  return (
    <div className="delete-modal">
      <h1>Confirm Deletion</h1>
      <p>
        Are you sure you want to delete invoice{' '}
        <span className="item-id">#{props.id}</span>? This action cannot be
        undone.
      </p>
      <div className="modal-btns">
        <div className="cancel" onClick={props.close}>
          Cancel
        </div>
        <div className="delete" onClick={deleteInvoice}>
          Delete
        </div>
      </div>
    </div>
  );
}
export default Delete;
