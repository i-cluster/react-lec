import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const saveExpenseDataHandler = expenseData => {
    const data = {...expenseData, id: Math.random().toString()}

    console.log('In NewExpense.js')
    console.log(data)
    
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense