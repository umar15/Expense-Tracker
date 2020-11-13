import React, { useContext } from "react";
import { initialTransactions } from "../context/TransactionContext";

const History = () => {
	const transactionContext = useContext(initialTransactions);
	return (
		<div className="history">
			<h4>History</h4>
			{transactionContext.map((trans) => {
				return (
					<li>
						<spna>{trans.desc}</spna>
						<span>{trans.amount}</span>
					</li>
				);
			})}
		</div>
	);
};

export default History;
