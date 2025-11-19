import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction() {
    const { transactions, deleteTransaction, editTransaction } = useContext(GlobalContext);

    const [editing, setEditing] = useState(null)
    const [editName, setEditName] = useState("");
    const [editAmount, setEditAmount] = useState("");
    const [error, setError] = useState("");

    const handleEdit = (transaction) => {
      setEditing(transaction.id);
      setEditName(transaction.text);
      setEditAmount(transaction.amount);
      setError("");
    };

    const saveEdit = (id) => {
        const cleanedText = editName.trim();
        if (!cleanedText) {
            setError("Please enter a valid description.");
            return;
          }
           
        //   validate amount
          if (isNaN(editAmount) || editAmount === "") {
            setError("Please enter a valid number for amount.");
            return;
          }

        editTransaction({ id, text: editName, amount: +editAmount });
        setEditing(null);
        setError("")
    };

    return (
        <div className="mt-4">
          <h4>Transaction history</h4>
          <ul className="list-group">
            {transactions.map((t) => ( 
                <li 
                key={t.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                    t.amount < 0 ? "list-group-item-danger" : "list-group-item-success"
                  }`}
                  >
                    {editing === t.id ? (
                        <>
                        <input 
                         type="text"
                         value={editName}
                         onChange={(e) => setEditName(e.target.value)}
                         className="form-control w-50 me-2"
                         placeholder="Enter description..."
                        />
                        <input 
                          type="number"
                          value={editAmount}
                          onChange={(e) => setEditAmount(e.target.value)}
                          className="form-control w-25 me-2"
                          />
                          {error && (
                          <div className="alert alert-danger py-1 mb-2">
                          {error}
                          </div>
                           )}
                          
                          <button onClick={() => saveEdit(t.id)}
                            className="form-control w-25 me-2"> Save</button>
                        </>
                      ) : (
                        <>
                          {t.text} <span>${t.amount}</span>
                        </>
                      )}
                      <div>
                        {editing !== t.id && (
                            <button className="btn btn-warning btn-sm me-2"
                            onClick={() => handleEdit(t)}> Edit </button>
                        )}
                        <button className="btn btn-danger btn-sm"
                        onClick={() => deleteTransaction(t.id)}>Delete</button>
                     </div>
                  </li>
            ))}
          </ul>
        </div>
    );

}