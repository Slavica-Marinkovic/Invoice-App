import React from "react";
import AddInvoice from "./Components/AddInvoice/AddInvoice";
import Header from "./Components/Header/Header";
import InvoiceItemView from "./Components/InvoiceItemView/InvoiceItemView";
import MainHeader from "./Components/MainHeader/MainHeader";
import StatusView from "./Components/StatusView/StatusView";
import EditInvoice from"./Components/EditInvoice/EditInvoice";

const App = () => {
    return(
        <>
        <Header />
        <MainHeader />
        <InvoiceItemView />
        <StatusView />
        <AddInvoice />
        <EditInvoice />
        </>
    )
}

export default App;
