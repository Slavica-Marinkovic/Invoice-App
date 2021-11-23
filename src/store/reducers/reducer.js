import {
  ADD_ITEMS,
  APP_LOAD,
  DELETE_INVOICE,
  DELETE_ITEMS,
  makeid,
  MARK_PAID,
  SAVE_CHANGES,
  SAVE_DRAFT,
  SAVE_ITEM,
  SAVE_SEND,
  SET_ITEMS,
} from '../actions/actions';
import data from '../../data.json';

const initialState = {
  invoice: data,
  items: [{ name: '', quantity: 0, price: 0, total: 0, id: makeid() }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DRAFT:
      return {
        ...state,
        invoice: [...state.invoice, action.payload],
        items: [{ name: '', quantity: 0, price: 0, total: 0, id: makeid() }],
      };
    case SAVE_SEND:
      return {
        ...state,
        invoice: [...state.invoice, action.payload],
        items: [{ name: '', quantity: 0, price: 0, total: 0, id: makeid() }],
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: [
          ...state.items,
          { name: '', quantity: 0, price: 0, total: 0, id: makeid() },
        ],
      };
    case DELETE_ITEMS:
      const index = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      let filteredArray = state.items.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        items: filteredArray,
      };
    case SAVE_ITEM:
      const item = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[item] = action.payload;
      return {
        ...state,
      };
    case MARK_PAID:
      const invoiceFound = state.invoice.find(
        (item) => item.id === action.payload
      );
      invoiceFound.status = 'paid';
      console.log('DONE');
      return { ...state, items: [...state.items] };
    case DELETE_INVOICE:
      const newInvoice = state.invoice.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, invoice: newInvoice };
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case SAVE_CHANGES:
      let indexInvoice = state.invoice.findIndex(
        (item) => item.id === action.payload.id
      );
      state.invoice[indexInvoice] = action.payload;
      return {
        ...state,
        items: [{ name: '', quantity: 0, price: 0, total: 0, id: makeid() }],
      };
    default:
      return state;
  }
};
