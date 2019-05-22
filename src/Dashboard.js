import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const Dashboard = () => (
  <div>
    This is from my dashboard component!
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;
