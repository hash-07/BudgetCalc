import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ newExpense }) => {
 const { id, charge, amount } = newExpense;

 return (
  <>
   <h1> from expense Item</h1>
   <li className="item">
    <div className="info">
     <span className="expenses">{charge}</span>
     <span className="amount">₹{amount}</span>
    </div>

    <button className="edit-btn" aria-label="edit button">
     <MdEdit />
    </button>

    <button className="clear-btn" aria-label="delete button">
     <MdDelete />
    </button>
   </li>
  </>
 );
};

export default ExpenseItem;
