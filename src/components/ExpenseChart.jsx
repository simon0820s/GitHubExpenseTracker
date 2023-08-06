import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

const ExpenseChart = () => {

  const { transactions } = useGlobalState()

  const totalIncome = transactions.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0)

  const totalExpense = transactions.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

  const expensePercentage = Math.round((totalExpense / totalIncome) * 100)
  const incomePercentage = 100 - expensePercentage

  if (totalIncome > 0) {
    return (

      <VictoryPie
        colorScale={["#cc2649", "#66324c"]}
        data={[
          { x: "Expense", y: expensePercentage },
          { x: "Income", y: incomePercentage },
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
  } else {
    return (
      <VictoryPie
        colorScale={["#cc2649", "#66324c"]}
        data={[
          { x: "Expense", y: 50 },
          { x: "Income", y: 50 },
        ]}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel
          angle={45}
          style={{
            fill: "red",
            fontSize: 17
          }} />} />
    )
  }
}

export default ExpenseChart