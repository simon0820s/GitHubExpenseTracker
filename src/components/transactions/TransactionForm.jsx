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
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input type="text" required placeholder="Enter an Description" onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" />
        <input type="number" required placeholder="Enter an Amount" onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg blck mb-2 w-full mt-2">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm