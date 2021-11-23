import React, { useEffect, useState } from 'react';
import './InvoiceDetails.css';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailsItem from './DetailsItem';
import * as actions from '../../store/actions/actions';
import DeleteItems from '../DeleteItems/DeleteItem';
import EditInvoice from '../EditInvoice/EditInvoice';
import Header from '../Header/Header';
import Backdrop from '../BackDrop/Backdrop';
import ActionButtons from './ActionButtons';

const InvoiceDetails = () => {
  const history = useHistory();
  let { id } = useParams();
  const [invoice, setInvoice] = useState({});
  const [items, setItems] = useState([]);
  const [totalDue, setToalDue] = useState();
  const [status, setStatus] = useState(invoice.status);
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabledMark, setDisabledMark] = useState(false);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.invoice.invoice);
  const itemsStore = useSelector((state) => state.invoice.items);

  useEffect(() => {
    const item = data.find((item) => item.id === id);
    setInvoice(item);
    const newItems = [];
    let due = 0;
    item.items.map((item) => {
      newItems.push(item);
      due += item.total;
    });
    setToalDue(due);
    setStatus(item.status);
    setItems(newItems);
  }, []);

  const formatDate = (date) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const dateItems = date.split('-');
    const monthIndex = dateItems[1];
    const dateString =
      dateItems[2] + ' ' + months[monthIndex - 1] + ' ' + dateItems[0];
    return dateString;
  };

  useEffect(() => {
    const item = data.find((item) => item.id === id);
    setInvoice(item);
    const newItems = [];
    let due = 0;
    item.items.map((item) => {
      newItems.push(item);
      due += item.total;
    });
    if (item.status === 'pending') {
      setDisabledMark(false);
      setDisabled(false);
    }
    if (item.status === 'draft' || item.status === 'paid') {
      setDisabledMark(true);
    }
    if (item.status === 'paid') {
      setDisabled(true);
    }
    setToalDue(due);
    setStatus(item.status);
    setItems(newItems);
  }, [itemsStore]);

  const markPaid = () => {
    if (invoice.status === 'pending') {
      dispatch(actions.markPaid(id));
      setStatus('paid');
    } else {
      setDisabledMark(true);
    }
  };

  const openModalFn = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const editInvoice = () => {
    if (invoice.status !== 'paid') {
      setEditModal(true);
    } else {
      setDisabled(true);
    }
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  return (
    <>
      <Header />
      {editModal || openModal ? (
        <Backdrop close={editModal ? closeEditModal : closeModal} />
      ) : null}
      {editModal ? (
        <EditInvoice close={closeEditModal} invoice={invoice} />
      ) : null}
      <div
        className="invoice-details-wrapper"
        onClick={() => {
          if (editModal) {
            setEditModal(false);
          }
        }}
      >
        {openModal ? <DeleteItems id={id} close={closeModal} /> : null}
        <div className="invoice-details">
          <div className="details-go-back" onClick={history.goBack}>
            <img src={arrowLeft} alt="left-arrow.svg" />
            <span>Go back</span>
          </div>
          <div className="details-header">
            <div className="details-status">
              <span>Status</span>
              <div className={status}>
                <span />
                <p>{status}</p>
              </div>
            </div>
            <ActionButtons
              editInvoice={editInvoice}
              markPaid={markPaid}
              openModalFn={openModalFn}
              disabled={disabled}
              disabledMark={disabledMark}
            />
          </div>
          <div className="details-main">
            <div className="id-description-address">
              <div className="id-description">
                <div className="details-id">
                  <span>#</span>
                  {id}
                </div>
                <span className="description">{invoice.description}</span>
              </div>
              <div className="sender-address">
                <span className="sender-street">
                  {invoice.senderAddress ? invoice.senderAddress.street : null}
                </span>
                <span className="sender-city">
                  {invoice.senderAddress ? invoice.senderAddress.city : null}
                </span>
                <span className="sender-postcode">
                  {invoice.senderAddress
                    ? invoice.senderAddress.postCode
                    : null}
                </span>
                <span className="sender-country">
                  {invoice.senderAddress ? invoice.senderAddress.country : null}
                </span>
              </div>
            </div>
            <div className="date-client-mail">
              <div className="details-date">
                <div>
                  <span>Invoice Date</span>
                  <p className="invoice-date">
                    {invoice.createdAt
                      ? formatDate(invoice.createdAt)
                      : invoice.createdAt}
                  </p>
                </div>
                <div>
                  <span>Payment Due</span>
                  <p className="payment-due">
                    {invoice.paymentDue
                      ? formatDate(invoice.paymentDue)
                      : invoice.paymentDue}
                  </p>
                </div>
              </div>
              <div className="client">
                <span>Bill to</span>
                <p className="details-client-name">{invoice.clientName}</p>
                <div className="client-address">
                  <span className="client-street">
                    {invoice.clientAddress
                      ? invoice.clientAddress.street
                      : null}
                  </span>
                  <span className="client-city">
                    {invoice.clientAddress ? invoice.clientAddress.city : null}
                  </span>
                  <span className="client-postcode">
                    {invoice.clientAddress
                      ? invoice.clientAddress.postCode
                      : null}
                  </span>
                  <span className="client-country">
                    {invoice.clientAddress
                      ? invoice.clientAddress.country
                      : null}
                  </span>
                </div>
              </div>
              <div className="mail">
                <span>Sent to</span>
                <p className="client-mail">{invoice.clientEmail}</p>
              </div>
            </div>
            <div className="items-prices">
              <div className="items-title">
                <span>Item Name</span>
                <span>QTY.</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              {items.map((item) => (
                <DetailsItem key={item.id} data={item} />
              ))}
            </div>
            <div className="sum">
              <div>Amount Due</div>
              <div className="invoice-amount">
                ${totalDue ? totalDue.toFixed(2) : totalDue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InvoiceDetails;
