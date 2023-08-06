import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

function TransactionForm() {

  const { addTransaction } = useGlobalState()

  const [description, setDescription] = useState('')

  const [amount, setAmount] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter an Description" onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Enter an Amount" onChange={(e) => setAmount(e.target.value)} />
        <button>Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm