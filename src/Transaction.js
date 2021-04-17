import React from 'react'

export default function Transaction(props) {
  const {
    bookkeeping_type,
    description,
    amounts,
    times,
    categories
  } = props


  const color = {
    color: `red`
  }
  
  return (
    <li>
      <header className="transactions-section-header -bordered">
        <div className="transaction-section-title">
          <h3 className="subheading -small">{times.when_recorded_local}</h3>
        </div>
      </header>
      <ul className="transactions-list">
        <li className="transaction -selected">
          <div className="transaction-section transaction-section-description">
            <div className="transaction-title">
              {description}
            </div>
            <div className="transaction-goal">
              {bookkeeping_type === "debit" ? `Spent from ` : `Deposited into `} 
              <span>Save-to-Spend</span>
            </div>
            <div className="transaction-section">
              <div className="transaction-right">
                <span className="badges">
                </span>
                <span className="amount transaction-amount -debit" style={color}>
                  {amounts.amount}
                </span>
                <span>
                  <div className="transaction-category" title="Transaction">
                    <a className="-secondary transaction-link" href="http://localhost:3000">
                      {categories[0].name}
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <div className="transaction-section -compact transaction-section-checkbox">
              <label className="checkbox-wrapper--3HymE mousetrap">
                <input type="checkbox"></input>
              </label>
            </div>
          </div>
        </li>
      </ul>
    </li>
  )
}
