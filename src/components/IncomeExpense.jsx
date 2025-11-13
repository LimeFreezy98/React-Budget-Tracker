import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className="d-flex justify-content-around my-3">
      <div className="p-3 bg-success text-white rounded w-50 mx-1">
        <h5>Income</h5>
        <p>+${income}</p>
      </div>
      <div className="p-3 bg-danger text-white rounded w-50 mx-1">
        <h5>Expense</h5>
        <p>-${expense}</p>
      </div>
    </div>
  );
}