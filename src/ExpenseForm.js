import React from "react";

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: 0
  };
  onDescription = e => {
    this.setState({ description: e.target.value });
  };
  onNoteChange = e => {
    this.setState({ note: e.target.value });
  };
  onAmountChange = e => {
    this.setState({ amount: e.target.value });
  };

  render() {
    return (
      <form>
        <h1> Add new expense </h1>
        <input
          type="text"
          placeholder="Enter description"
          value={this.state.description}
          onChange={this.onDescription}
        />
        <input
          type="number"
          placeholder="Amount"
          onChange={this.onAmountChange}
        />
        <textarea placeholder="Add a note" onChange={this.onNoteChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default ExpenseForm;
