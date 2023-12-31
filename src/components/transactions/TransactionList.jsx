import { useGlobalState } from '../../context/GlobalState'
import TransactionItem from './TransactionItem'

const TransactionList = () => {

  const { transactions } = useGlobalState()

  return (

    <div className='w-full flex flex-col gap-2'>
      <h3 className='text-red text-2xl font-bold block w-full'>History</h3>
      <ul className='w-full'>
        {
          transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))
        }
      </ul>
    </div>

  )
}

export default TransactionList