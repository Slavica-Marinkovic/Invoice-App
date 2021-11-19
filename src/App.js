import React from "react";
import AddInvoice from "./Components/AddInvoice/AddInvoice";
import Header from "./Components/Header/Header";
import InvoiceItemView from "./Components/InvoiceItemView/InvoiceItemView";
import MainHeader from "./Components/MainHeader/MainHeader";
import StatusView from "./Components/StatusView/StatusView";

const App = () => {
    return(
        <>
        <Header />
        <MainHeader />
        <InvoiceItemView />
        <StatusView />
        <AddInvoice />
        </>
    )
}

export default App;
