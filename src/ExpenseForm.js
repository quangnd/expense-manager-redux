import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: 0,
    createdAt: moment(),
    calendarFocused: false
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
  onDateChange = createdAt => {
    this.setState({ createdAt });
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
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
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={() => false}
          id="xyz-123"
        />
        Amount: <input
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
