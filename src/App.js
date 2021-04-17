import React from 'react'
import TransactionList from './TransactionList'

function App() {
  return (
    <div className="layout">
      <div className="layout-header">
        <div className="masthead">Masthead</div>
      </div>
      <div className="layout-body">
        <TransactionList 
          transactions ={sampleTransactions}
        />
      </div>
    </div>
  )
}

const sampleTransactions = [
  {
    "uuid": "29a443d0-5186-3569-be83-389ebffcccd1",
    "user_id": "c091e4e7-c7ea-4100-9d43-d4c51995b8ae",
    "record_type": "JOURNALENTRY",
    "transaction_type": "ach",
    "bookkeeping_type": "debit",
    "is_hold": false,
    "is_active": true,
    "running_balance": 13211500,
    "raw_description": "DEBIT FOR  IRS              USATAXPYMT  CO REF- 222150684803423",
    "description": "Irs Usataxpymt",
    "categories": [
      {
        "uuid": "127",
        "name": "Money Transfers",
        "folder": "Financial",
        "folder_id": 22,
        "emoji": "🏛"
      }
    ],
    "times": {
      "when_recorded": 1618593170093,
      "when_recorded_local": "2021-04-16 17:12:50.093",
      "when_received": 1618593187000,
      "last_modified": 1618593187460,
      "last_txvia": 1618593187460
    },
    "amounts": {
      "amount": 10910000,
      "cleared": 10910000,
      "fees": 0,
      "cashback": 0,
      "base": 10910000
    },
    "correlation_id": "693f4116-2768-3026-8494-bcafe23db5fd",
    "account_id": "c5054c45-8821-3859-b0a6-ab4b497110aa",
    "partner": "bbva",
    "attachments": [

    ],
    "badges": [

    ],
    "is_engram_eligible": true,
    "balances": {
      "total": 13211500,
      "safe_to_spend": 13211500,
      "bills": 0,
      "deposits": 0,
      "pending": 50000,
      "goals": 0,
      "expenses": 0,
      "available": 50000,
      "protected": 0,
      "protected_incoming": 0,
      "overspent": 0
    },
    "indisputable_reason": "Please contact Support to dispute ACH transfers."
  },
  {
    "uuid": "3eb75615-ebd0-38c2-a623-131528d6bdf1",
    "user_id": "c091e4e7-c7ea-4100-9d43-d4c51995b8ae",
    "record_type": "JOURNALENTRY",
    "transaction_type": "ach",
    "bookkeeping_type": "credit",
    "is_hold": false,
    "is_active": true,
    "running_balance": 24121500,
    "raw_description": "CREDIT FOR GUSTO PAYROLL    PAY 806833  CO REF- 6SEMJPLJBRJ",
    "description": "Gusto Payroll Pay",
    "categories": [
      {
        "uuid": "186",
        "name": "Other Income",
        "folder": "Income",
        "folder_id": 26,
        "emoji": "💵"
      }
    ],
    "times": {
      "when_recorded": 1618475760530,
      "when_recorded_local": "2021-04-15 08:36:00.530",
      "when_received": 1618475803000,
      "last_modified": 1618475803949,
      "last_txvia": 1618475803949
    },
    "amounts": {
      "amount": 6377800,
      "cleared": 6377800,
      "fees": 0,
      "cashback": 0,
      "base": 6377800
    },
    "correlation_id": "3d196aba-aeff-3eca-badb-cae61ebbc1cf",
    "account_id": "c5054c45-8821-3859-b0a6-ab4b497110aa",
    "partner": "bbva",
    "attachments": [

    ],
    "badges": [

    ],
    "is_engram_eligible": true,
    "balances": {
      "total": 24121500,
      "safe_to_spend": 24121500,
      "bills": 0,
      "deposits": 0,
      "pending": 50000,
      "goals": 0,
      "expenses": 0,
      "available": 50000,
      "protected": 0,
      "protected_incoming": 0,
      "overspent": 0
    },
    "indisputable_reason": "Please contact Support to dispute ACH transfers."
  }
]

export default App
