import React from "react";

const transactions = [
	{ desc: "Salary", amount: 100 },
	{ desc: "mobile", amount: 40 },
	{ desc: "others", amount: 10 },
];

const History = () => {
	return (
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
	);
};

export default History;
