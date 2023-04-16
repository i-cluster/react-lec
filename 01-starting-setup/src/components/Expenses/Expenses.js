import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const filterControlHandler = (filter) => setYear(filter);

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === Number(year)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={year}
        onFilterControl={filterControlHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
