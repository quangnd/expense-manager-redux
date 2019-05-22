import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "./actions/filters";

const ExpenseListFilters = props => {
  const onSelectChange = e => {
    if (e.target.value === "amount") {
      props.dispatch(sortByAmount());
    } else {
      props.dispatch(sortByDate());
    }
  };
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select value={props.filters.sortBy} onChange={onSelectChange}>
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
