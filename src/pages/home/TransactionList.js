import { useFirestore } from '../../hooks/useFirestore'

import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
    const { deleteDocument, response } = useFirestore('transactions')

        if (transactions.length === 0) {
          return <div className="error">There are no transactions for this month yet!</div>
        }

    return (
      <ul className={styles.transactions}>
        {transactions && transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
            <p className={styles.month}>{transaction.month.value}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    )
}