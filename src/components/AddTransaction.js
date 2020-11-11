import React from "react";

const AddTransaction = () => {
	return (
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
	);
};

export default AddTransaction;
