import React from "react";
import "./App.css";

const transactions = [
	{ desc: "Salary", amount: 100 },
	{ desc: "mobile", amount: 40 },
	{ desc: "others", amount: 10 },
];

const ExpenseTracker = () => {
	return (
		<div className="container">
			<div className="header">
				<h1>Expense Tracker</h1>
			</div>

			<div className="balance">
				<h4>
					Your Balance <br />
				</h4>
				<h2>$0.00</h2>
			</div>

			<div className="income-expense">
				<div>
					<h4>
						INCOME <br />
					</h4>
					<h2>$0.00</h2>
				</div>

				<div>
					<h4>
						EXPENSE <br />
					</h4>
					<h2>$0.00</h2>
				</div>
			</div>
			<hr />

			<div className="history">
				<h4>History</h4>
				{transactions.map((trans) => {
					return (
						<li>
							<spna>{trans.desc}</spna>
							<span>{trans.amount}</span>
						</li>
					);
				})}
			</div>
			<hr />

			<div className="addTransaction">
				<h4>Add Transaction</h4>
				<form>
					<label>
						<strong>Description</strong>
					</label>
					<input type="text" placeholder="Exter text..." required />
					<br />
					<label>
						<strong>Amount</strong>
					</label>
					<input type="number" placeholder="Enter amount..." required />
					<br />
					<input className="btn" type="submit" value="Add Transaction" />
				</form>
			</div>
		</div>
	);
};

export default ExpenseTracker;
