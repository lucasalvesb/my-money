import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'

import styles from './Home.module.css'

//components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import TransactionFilter from './TransactionFilter'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  )
  const [currentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  const transactions = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case 'all':
            return true
          case 'january':
          case 'february':
          case 'march':
          case 'april':
          case 'may':
          case 'june':
          case 'july':
          case 'august':
          case 'september':
          case 'october':
          case 'november':
          case 'december':
            return document.month.value === currentFilter
          default:
            return true
        }
      })
    : null
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && (
          <TransactionFilter
            currentFilter={currentFilter}
            changeFilter={changeFilter}
          />
        )}
        {transactions && <TransactionList transactions={transactions} />}
      </div>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
