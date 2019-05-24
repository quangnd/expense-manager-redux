import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import { DateRangePicker } from "react-dates";
let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with altFilters correctly", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "bill";
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(setTextFilter).toHaveBeenCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({ filters: altFilters });
  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date change", () => {
  wrapper.find(DateRangePicker).prop("onDatesChange")({
    startDate: altFilters.startDate,
    endDate: altFilters.endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test("should handle focus change", () => {
  const calendarFocus = "endDate";
  wrapper.find(DateRangePicker).prop("onFocusChange")(calendarFocus);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocus);
});
