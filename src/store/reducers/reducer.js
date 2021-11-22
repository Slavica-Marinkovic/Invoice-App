import {
  ADD_ITEMS,
  APP_LOAD,
  DELETE_ITEMS,
  makeid,
  SAVE_DRAFT,
  SAVE_ITEM,
  SAVE_SEND,
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
      console.log(state.items);
      console.log('id: ' + action.payload);
      let filteredArray = state.items.filter(
        (item) => item.id !== action.payload
      );

      console.log(filteredArray);
      return {
        ...state,
        items: filteredArray,
      };
    case SAVE_ITEM:
      console.log('>>>');
      const item = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[item] = action.payload;

      return {
        ...state,
      };
    default:
      return state;
  }
};
