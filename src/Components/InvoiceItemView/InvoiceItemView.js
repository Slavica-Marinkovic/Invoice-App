import React from "react";
import "./InvoiceItemView.css";
import rightArrow from "../../assets/icon-arrow-right.svg"

const InvoiceItemView = () => {
    return (
        <div className="invoice-list">
            <div className="invoice-item-container">
                <div className="id"><span>#</span>RT3080</div>
                <div className="date">Due 12 Oct 2021</div>
                <div className="client-name">Jensen Huang</div>
                <div className="amount">$1,800.90</div>
                <div className="status-wrapper">
                    <div className="status">
                        <span></span>
                        <p>Paid</p>
                    </div>
                    <div className="arrow-img">
                        <img src={rightArrow} alt="right-arrow-icon" />
                    </div>
                </div>
            </div>
            <div className="invoice-item-container">
                <div className="id"><span>#</span>RT3080</div>
                <div className="date">Due 12 Oct 2021</div>
                <div className="client-name">Jensen Huang</div>
                <div className="amount">$1,950.90</div>
                <div className="status-wrapper">
                    <div className="status">
                        <span></span>
                        <p>Paid</p>
                    </div>
                    <div className="arrow-img">
                        <img src={rightArrow} alt="right-arrow-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceItemView;