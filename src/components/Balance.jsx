import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((t) => t.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

    return (
        <div className="mb-3">
        <h4>Your Balance</h4>
        <h2>${total}</h2>
        </div>
    )
}