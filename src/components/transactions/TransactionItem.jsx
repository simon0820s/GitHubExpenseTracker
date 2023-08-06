import { useGlobalState } from "../../context/GlobalState"

export function TransactionItem({ transaction }) {

  const { deleteTransaction } = useGlobalState()

  return (
    <li className="bg-zinc-600 text-neutral-100 px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <div>
        <p className="text-sm">{transaction.description}</p>
        <span>${transaction.amount}</span>
        <button onClick={() => {
          deleteTransaction(transaction.id)
        }}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TransactionItem