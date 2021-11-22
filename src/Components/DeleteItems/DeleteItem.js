import React from "react";
import "./DeleteItem.css";

function Delete() {
    return (
        <div className="delete-modal">
            <h1>Confirm Deletion</h1>
            <p>Are you sure you want to delete invoice <span className="item-id">#XM9141</span>? This action cannot beundone.</p>
            <div className="modal-btns">
                <div className="cancel">Cancel</div>
                <div className="delete">Delete</div>
            </div>
        </div>
    );
}
export default Delete;