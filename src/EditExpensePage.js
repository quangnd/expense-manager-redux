import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "./actions/expenses";

class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.onRemove({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let expense = state.expenses.find(
    expense => expense.id === props.match.params.id
  );
  return {
    expense
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (id, expense) => dispatch(editExpense(id, expense)),
  onRemove: data => dispatch(removeExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
