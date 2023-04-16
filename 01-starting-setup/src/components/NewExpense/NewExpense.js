import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const saveExpenseDataHandler = expenseData => {
    const data = {...expenseData, id: Math.random().toString()}
    props.onAddExpense(data)
  }

  const [edit, setEdit] = useState(false)

  const editHandler = value => setEdit(value)

  return (
    <div className='new-expense'>
      {!edit && <button onClick={() => editHandler(true)}>Add New Expense</button>}
      {edit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={editHandler} />}
    </div>
  )
}

export default NewExpense