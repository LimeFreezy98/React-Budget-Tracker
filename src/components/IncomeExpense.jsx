import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { GradientContext } from "../context/GradientContext";


export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext); 
  const { gradientEnabled } = useContext(GradientContext);

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

      <div className={`p-3 bg-success text-white rounded w-50 mx-1 
      ${gradientEnabled ? "income-gradient" : "bg-success"}`}>
        <h5>Income</h5>
        <p>+${income}</p>
      </div>

      <div className={`p-3 bg-danger text-white rounded w-50 mx-1
       ${gradientEnabled ? "expense-gradient" : " bg-danger"}`}>
        <h5>Expense</h5>
        <p>-${expense}</p>
      </div>
    </div>
  );
}