import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'
import { useEffect, useState } from 'react'

const ExpenseChart = () => {

  const { transactions } = useGlobalState()
  const [income, setIncome] = useState(100)
  const [expense, setExpense] = useState(0)

  useEffect(() => {

    const totalIncome = transactions.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0)

    const totalExpense = transactions.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

    const expensePercentage = Math.round((totalExpense / totalIncome) * 100)
    setExpense(expensePercentage) 
    setIncome(100 - expensePercentage)

  }, [transactions])

  return (
    <VictoryPie
      colorScale={["#cc2649", "#66324c"]}
      data={[
        { x: "Expense", y: expense },
        { x: "Income", y: income },
      ]}
      animate={{
        duration: 200
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel
        angle={45}
        style={{
          fill: "red",
          fontSize: 17
        }} />} />
  )
}

export default ExpenseChart