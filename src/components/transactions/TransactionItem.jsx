import { useGlobalState } from "../../context/GlobalState"

export function TransactionItem({ transaction }) {

  const { deleteTransaction } = useGlobalState()

  return (
    <li className="bg-inter text-red px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <div>
        <p className="text-sm">{transaction.description}</p>
        <span>${transaction.amount}</span>
      </div>
      <button className="text-md font-bold cursor-pointer" onClick={() => {
        deleteTransaction(transaction.id)
      }}>
        Delete
      </button>
    </li>
  )
}

export default TransactionItem