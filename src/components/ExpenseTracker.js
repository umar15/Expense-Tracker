import React from "react";
import "./App.css";
import Header from "./Header";
import IncomeExpense from "./IncomeExpense";
import Balance from "./Balance";
import History from "./History";
import AddTransaction from "./AddTransaction";

const ExpenseTracker = () => {
	return (
		<div className="container">
			<Header />
			<Balance />
			<IncomeExpense />
			<hr />
			<History />
			<hr />
			<AddTransaction />
		</div>
	);
};

export default ExpenseTracker;
