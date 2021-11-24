export const SAVE_DRAFT = 'SAVE_DRAFT';
export const SAVE_SEND = 'SAVE_SEND';
export const ADD_ITEMS = 'ADD_ITEMS';
export const DELETE_ITEMS = 'DELETE_ITEMS';
export const SAVE_ITEM = 'SAVE_ITEM';
export const MARK_PAID = 'MARK_PAID';
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const SET_ITEMS = 'SET_ITEMS';
export const SAVE_CHANGES = 'SAVE_CHANGES';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';

export const makeid = () => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const numbers = '0123456789';
  const charactersLength = characters.length;
  const numbersLength = numbers.length;
  for (let i = 0; i < 2; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  for (let i = 0; i < 4; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbersLength));
  }

  return result.toUpperCase();
};

export const saveDraft = (
  status,
  address,
  city,
  postalCode,
  country,
  name,
  clientAddress,
  clientEmail,
  clientCity,
  clientPostCode,
  clientCountry,
  date,
  description,
  dropdownChoice,
  items
) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  let totalPrice = 0;
  items.map((item) => {
    totalPrice += Number(item.total);
  });

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + dropdownChoice);
  const dateDue = getFormattedDate(newDate);

  const newInvoice = {
    id: makeid(6),
    createdAt: date,
    paymentDue: dateDue,
    description: description,
    paymentTerms: dropdownChoice,
    clientName: name,
    clientEmail: clientEmail,
    status: status,
    senderAddress: {
      street: address,
      city: city,
      postCode: postalCode,
      country: country,
    },
    clientAddress: {
      street: clientAddress,
      city: clientCity,
      postCode: clientPostCode,
      country: clientCountry,
    },
    items: items,
    total: totalPrice.toFixed(2),
  };

  return {
    type: SAVE_DRAFT,
    payload: newInvoice,
  };
};

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return year + '-' + month + '-' + day;
}

export const saveSend = (
  status,
  address,
  city,
  postalCode,
  country,
  name,
  clientAddress,
  clientEmail,
  clientCity,
  clientPostCode,
  clientCountry,
  date,
  description,
  dropdownChoice,
  items
) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  let totalPrice = 0;
  items.map((item) => {
    totalPrice += Number(item.total);
  });

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + dropdownChoice);
  const dateDue = getFormattedDate(newDate);

  const newInvoice = {
    id: makeid(6),
    createdAt: date,
    paymentDue: dateDue,
    description: description,
    paymentTerms: dropdownChoice,
    clientName: name,
    clientEmail: clientEmail,
    status: status,
    senderAddress: {
      street: address,
      city: city,
      postCode: postalCode,
      country: country,
    },
    clientAddress: {
      street: clientAddress,
      city: clientCity,
      postCode: clientPostCode,
      country: clientCountry,
    },
    items: items,
    total: totalPrice,
  };

  return {
    type: SAVE_SEND,
    payload: newInvoice,
  };
};

export const addItems = () => {
  return {
    type: ADD_ITEMS,
  };
};

export const deleteItems = (id) => {
  return {
    type: DELETE_ITEMS,
    payload: id,
  };
};

export const saveItem = (name, qty, price, total, id) => {
  const newItem = {
    name: name,
    quantity: qty,
    price: price,
    total: Number(qty) * Number(price),
    id: id,
  };
  return {
    type: SAVE_ITEM,
    payload: newItem,
  };
};

export const markPaid = (id) => {
  return {
    type: MARK_PAID,
    payload: id,
  };
};

export const deleteInvoice = (id) => {
  return {
    type: DELETE_INVOICE,
    payload: id,
  };
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    payload: items,
  };
};

export const saveChanges = (
  status,
  address,
  city,
  postalCode,
  country,
  name,
  clientAddress,
  clientEmail,
  clientCity,
  clientPostCode,
  clientCountry,
  date,
  description,
  dropdownChoice,
  items,
  createdAt,
  id
) => {
  let totalPrice = 0;
  items.map((item) => {
    totalPrice += Number(item.total);
  });

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + dropdownChoice);
  const dateDue = getFormattedDate(newDate);

  const newInvoice = {
    id: id,
    createdAt: createdAt,
    paymentDue: dateDue,
    description: description,
    paymentTerms: dropdownChoice,
    clientName: name,
    clientEmail: clientEmail,
    status: 'pending',
    senderAddress: {
      street: address,
      city: city,
      postCode: postalCode,
      country: country,
    },
    clientAddress: {
      street: clientAddress,
      city: clientCity,
      postCode: clientPostCode,
      country: clientCountry,
    },
    items: items,
    total: totalPrice,
  };

  return {
    type: SAVE_CHANGES,
    payload: newInvoice,
    id: id,
  };
};

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS,
  };
};
