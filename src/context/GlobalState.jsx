import { createContext, useReducer } from "react";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || []
};

export const GlobalContext = createContext(initialState);

function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      const newAddList = [action.payload, ...state.transactions];
      localStorage.setItem("transactions", JSON.stringify(newAddList));
      return { ...state, transactions: newAddList };
    }

    case "DELETE_TRANSACTION": {
      const newDeleteList = state.transactions.filter(
        (t) => t.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(newDeleteList));
      return { ...state, transactions: newDeleteList };
    }

    case "EDIT_TRANSACTION": {
      const updatedList = state.transactions.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
      localStorage.setItem("transactions", JSON.stringify(updatedList));
      return { ...state, transactions: updatedList };
    }

    default:
      return state;
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function editTransaction(updated) {
    dispatch({ type: "EDIT_TRANSACTION", payload: updated });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        editTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}