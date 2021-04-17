import React from 'react'
import Transaction from './Transaction'

export default function TransactionList({ transactions }) {
  return (
    <div>
      <div className="transactions-section">
        {transactions.map(transaction => {
          return (
            <Transaction 
              key={transaction.uuid} 
              {...transaction}
            />
          )
        })}
      </div>
    </div>

  )
}
