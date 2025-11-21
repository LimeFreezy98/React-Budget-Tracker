
import './App.css';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from './context/GlobalState';
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { GlowContext } from './context/GlowContext';
import { GradientContext } from './context/GradientContext';

function App() {
   const { theme, toggleTheme } = useContext(ThemeContext);

   const { glowEnabled, toggleGlow } = useContext(GlowContext);

   const { gradientEnabled, toggleGradient } = useContext(GradientContext);

  return (
    <GlobalProvider>
        <div className='container'>

          <h2 className= "mb-4">Expance/Budget Tracker</h2>
          {/* Light/Dark Button */}
         <button onClick={toggleTheme}
          className="theme-toggle">
         {theme === "light" ? "Dark Mode" : " Light Mode"}
          </button>
          {/* Glow Edit/Delete toggle Button */}
          <button onClick={toggleGlow} className="glow-toggle mt-2">
            {glowEnabled ? "Disable edit/delete Button Glow" : "Enable  edit/delete Button Glow"}
          </button>

          {/* gradient Income/Expense toggle Button */}
          <button onClick={toggleGradient} className="gradient-toggle mt-2">
            {gradientEnabled ? "Disable income/expense Gradient" : "Enable income/expense Gradient"}
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
