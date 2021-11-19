import React from "react";
import "./MainHeader.css";
import downArrow from "../../assets/icon-arrow-down.svg"
import iconPlus from "../../assets/icon-plus.svg"

const MainHeader = () => {
    return(
        <div className="main-header">
           <div className="main-header-left">
            <h1>Invoices</h1>
            <p>There are 7 total invoices</p>
           </div>
           <div className="main-header-right">
               <p>Filter by status</p>
               <span>
                   <img src={downArrow} alt="down-arrow.svg" />
               </span>
               <div className="newInvoice-btn">
                   <img src={iconPlus} alt="icon-plus.svg" />
                   <span className="newInvoice">New <span className="second-span">Invoice</span></span>
               </div>
               
           </div>
       </div>
    )
}

export default MainHeader