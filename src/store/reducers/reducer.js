import { APP_LOAD, SAVE_DRAFT, SAVE_SEND } from '../actions/actions';
import data from '../../data.json';

const initialState = {
  invoice: data,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DRAFT:
      return {
        invoice: [...state.invoice, action.payload],
      };
    case SAVE_SEND:
      return {
        invoice: [...state.invoice, action.payload],
      };
    default:
      return state;
  }
};
