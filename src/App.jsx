
import './App.css';

import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from './context/GlobalState';

function App() {


  return (
    <GlobalProvider>
        <div className='container'>
          <h2 className= "mb-4">Expance/Budget Tracker</h2>
          <Balance />

          <IncomeExpense />
          
        </div>
        </GlobalProvider>


  )
}

export default App
