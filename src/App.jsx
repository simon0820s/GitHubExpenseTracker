import { GlobalProvider } from "./context/GlobalState"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import IncomeExpenses from "./components/transactions/IncomeExpenses"
import ExpenseChart from "./components/ExpenseChart"


function App() {
  return (
    <GlobalProvider>
      <div className="bg-softBlue text-softRed h-screen flex justify-center items-center">
        <div className="bg-blue p-10 rounded-lg flex gap-10">

          <div className="flex flex-col gap-6">
            <Header />
            <div className="flex flex-col gap-1">
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
          </div>

          <div className="flex flex-col justify-start items-center">
            <ExpenseChart />
            <TransactionList />
          </div>

        </div>
      </div>
    </GlobalProvider>
  )
}

export default App