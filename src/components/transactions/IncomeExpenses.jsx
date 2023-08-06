import { useGlobalState } from "../../context/GlobalState"

const IncomeExpenses = () => {

  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1
  const expense = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1

  return (
    <>
      <div className="flex justify-between">
        <h4>Income</h4>
        <p>{income}</p>
      </div>

      <div className="flex justify-between">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>

    </>
  )

}

export default IncomeExpenses