import React from "react";
import "./Empty-invoices.css";
import emptyImage from "../../assets/illustration-empty.svg"



function Empty() {
    return (
        <div className="empty-container">
            <div className="empty-img">
            <img src={emptyImage} alt="empty.svg" />
            </div>
            <h1>There is nothing here</h1>
            <p>Create an invoice by clicking the<br /> <span> New Invoice</span> button and get started</p>
        </div>
    );
}
export default Empty;