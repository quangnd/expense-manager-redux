import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescription = e => {
    this.setState({ description: e.target.value });
  };
  onNoteChange = e => {
    this.setState({ note: e.target.value });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please provide description and amount!" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Add new expense </h1>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Enter description"
          value={this.state.description}
          onChange={this.onDescription}
        />
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={() => false}
          id="xyz-123"
        />
        Amount:{" "}
        <input
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <textarea
          placeholder="Add a note"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ExpenseForm;
