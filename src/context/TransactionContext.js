import { createContext } from "react";
import TransactionReducer from "./TransactionReducer";

const transactions = [
	{ desc: "Salary", amount: 100 },
	{ desc: "mobile", amount: 40 },
	{ desc: "others", amount: 10 },
];

// Create transaction global context
export const initialTransactions = createContext(transactions);

// Provider, which provide all data to other components
export const transactionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TransactionReducer, initialState);

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION", // dispatch the action to reducer function i.e TransactionReducer
			payload: transaction, // The content send to action
		});
	}

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	return (
		<initialTransactions.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				deleteTransaction,
			}}
		>
			{children}
		</initialTransactions.Provider>
	);
};
