export const SAVE_DRAFT = 'SAVE_DRAFT';
export const SAVE_SEND = 'SAVE_SEND';

const makeid = () => {
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
  dropdownChoice
) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  console.log(dropdownChoice);

  const newInvoice = {
    id: makeid(6),
    createdAt: today,
    paymentDue: date,
    description: description,
    paymentTerms: dropdownChoice, // TODO
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
    items: [
      {
        name: 'Web Design',
        quantity: 1,
        price: 6155.91,
        total: 6155.91,
      },
    ], //TODO
    total: 6155.91, //TODO
  };

  return {
    type: SAVE_DRAFT,
    payload: newInvoice,
  };
};

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
  dropdownChoice
) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  const newInvoice = {
    id: makeid(6),
    createdAt: today,
    paymentDue: date,
    description: description,
    paymentTerms: 30, // TODO
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
    items: [
      {
        name: 'Web Design',
        quantity: 1,
        price: 6155.91,
        total: 6155.91,
      },
    ], //TODO
    total: 6155.91, //TODO
  };

  return {
    type: SAVE_SEND,
    payload: newInvoice,
  };
};
