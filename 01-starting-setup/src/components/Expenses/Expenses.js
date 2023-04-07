import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState('2020')

  const filterControlHandler = filter => setYear(filter)

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={year} onFilterControl={filterControlHandler} />
      { props.items.filter(expense => expense.date.getFullYear() === Number(year)).map(expense => 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ) }
    </Card>
  );
}

export default Expenses;
