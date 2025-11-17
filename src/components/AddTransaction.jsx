import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const { addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text || !amount) return;
        const newTransaction = {
          id: Date.now(),
          text,
          amount: +amount,
        };
        addTransaction(newTransaction);
        setText("");
        setAmount("");
      };
   
      return (
        <div className="mt-4">
          <h4>Add New Transaction</h4>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter description..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                step="0.01"
                className="form-control"
                placeholder="Enter amount (negative = expense)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button className="add-transaction-btn">Add Transaction</button>
          </form>
        </div>
      );
    }