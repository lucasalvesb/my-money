import styles from './Home.module.css'

const filterList = [
  'all',
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

export default function TransactionFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter)
  }

  return (
    <div className={styles.transactionFilter}>
      <nav>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? styles.active : ''}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  )
}
