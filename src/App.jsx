
import './App.css';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from './context/GlobalState';
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
   const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <GlobalProvider>
        <div className='container'>

          <h2 className= "mb-4">Expance/Budget Tracker</h2>
          {/* Light/Dark Button */}
         <button onClick={toggleTheme}
          className="theme-toggle">
         {theme === "light" ? "Dark Mode" : " Light Mode"}
          </button>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
          
        </div>
        </GlobalProvider>


  )
}

export default App
