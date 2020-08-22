import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import Alert from "./Components/Alert";
import { v4 as uuid } from "uuid";

const initialExpenses = [
 { id: uuid(), charge: "rent", amount: 1600 },
 { id: uuid(), charge: "car payment", amount: 1700 },
 { id: uuid(), charge: "credit bill", amount: 1800 },
];

function App() {
 //******************state values*************************
 const [expenses, setExpences] = useState(initialExpenses);

 const [charge, setCharge] = useState("");

 const [amount, setAmount] = useState("");

 const [alert, setAlert] = useState({ show: false });

 //*****************functionality******************************

 const handleCharge = (e) => {
  setCharge(e.target.value);
 };

 const handleAmount = (e) => {
  setAmount(e.target.value);
 };

 const handleAlert = ({ type, text }) => {
  setAlert({ show: true, type, text });
  setTimeout(() => {
   setAlert({ show: false });
  }, 3000);
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (charge !== "" && amount > 0) {
   const singleExp = { id: uuid(), charge, amount };
   setExpences([...expenses, singleExp]);
   handleAlert({ type: "success", text: "item added" });
   setCharge("");
   setAmount("");
  } else {
   handleAlert({
    type: "danger",
    text: "Charge can't be empty & amount value has to be greater than zero",
   });
  }
 };

 return (
  <>
   {alert.show && <Alert type={alert.type} text={alert.text} />}
   <Alert />
   <h1>Budget Calculator</h1>
   <main className="App">
    <ExpenseForm
     charge={charge}
     amount={amount}
     handleAmount={handleAmount}
     handleCharge={handleCharge}
     handleSubmit={handleSubmit}
    />
    <ExpenseList expenses={expenses} />
   </main>
   <h1>
    Total Spending
    <span className="total">
     {expenses.reduce((prev, current) => {
      return (prev = prev + parseInt(current.amount));
     }, 0)}
    </span>
   </h1>
  </>
 );
}

export default App;
