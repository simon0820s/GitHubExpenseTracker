import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

function TransactionForm() {

  const { addTransaction } = useGlobalState()

  const [description, setDescription] = useState('')

  const [amount, setAmount] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setDescription("")
    setAmount(0)
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input value={description} type="text" required placeholder="Enter an Description" onChange={(e) => setDescription(e.target.value)}
          className="bg-inter text-red px-3 py-2 rounded-lg block mb-2 w-full outline-none" />
        <input value={amount} type="number" required placeholder="Enter an Amount" onChange={(e) => setAmount(e.target.value)}
          className="bg-inter text-red px-3 py-2 rounded-lg block mb-2 w-full outline-none" />
        <button className="bg-softRed text-blue hover:bg-red font-bold px-3 py-2 rounded-lg blck mb-2 w-full mt-2 transition-all ease-in-out duration-500">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm