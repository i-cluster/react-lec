import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = props => {
  // const [title, setTitle] = useState('')
  // const [amount, setAmount] = useState('')
  // const [date, setDate] = useState('')

  const [userInput, setUserInput] = useState({ title: '', amount: '', date: '' })

  const titleChangeHandler = event => {
    // setTitle(event.target.value)
    // setUserInput({...userInput, title: event.target.value})
    setUserInput(prevState => { return {...prevState, title: event.target.value} })
  }

  const amountChangeHandler = event => {
    // setAmount(event.target.value)
    // setUserInput({...userInput, amount: event.target.value})
    setUserInput(prevState => { return {...prevState, amount: event.target.value} })
  }
  
  const dateChangeHandler = event => {
    // setDate(event.target.value)
    // setUserInput({...userInput, date: event.target.value})
    setUserInput(prevState => { return {...prevState, date: event.target.value} })
  }
  
  const submitHandler = event => {
    event.preventDefault()

    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date)
    }

    props.onSaveExpenseData(expenseData)

    setUserInput({title: '', amount: '', date: ''})
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={userInput.title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={userInput.amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={userInput.date} min='2023-03-30' step='2050-03-30' onChange={dateChangeHandler} />
        </div>
        <div className="new-ewpense__actions">
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm