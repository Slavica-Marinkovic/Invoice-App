import React from "react";
import "./MainHeader.css";
import downArrow from "../../assets/icon-arrow-down.svg"
import iconPlus from "../../assets/icon-plus.svg"

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="main-header-left">
                <h1>Invoices</h1>
                <p className="first-p">There are <span className="num-invoices">7</span> total invoices</p>
                <p className="second-p"><span className="num-invoices">7</span> invoices</p>
            </div>
            <div className="main-header-right">
                <p>Filter <span className="filter-span">by status</span></p>
                <span>
                    <img src={downArrow} alt="down-arrow.svg" />
                </span>
                <div className="status-modal">
                    <div>
                        <input type="checkbox" name="draft" id="draft"></input>
                        <label htmlFor="draft">Draft</label>
                    </div>
                    <div>
                        <input type="checkbox" name="pending" id="pending"></input>
                        <label htmlFor="pending">Pending</label>
                    </div>
                    <div>
                        <input type="checkbox" name="paid" id="paid"></input>
                        <label htmlFor="paid">Paid</label>
                    </div>
                </div>
                <div className="newInvoice-btn">
                    <img src={iconPlus} alt="icon-plus.svg" />
                    <span className="newInvoice">New <span className="second-span">Invoice</span></span>
                </div>

            </div>
        </div>
    )
}

export default MainHeader