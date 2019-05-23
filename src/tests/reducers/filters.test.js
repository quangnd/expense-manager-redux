import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should setup default filter value", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const state = filterReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = 'bill'
  const action = { type: "SET_TEXT_FILTER", text}
  const state = filterReducer(undefined, action);
  expect(state.text).toBe("bill");
});

test("should set start date filter", () => {
  const startDate = moment()
  const action = { type: "SET_START_DATE", startDate}
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("should set end date filter", () => {
  const endDate = moment()
  const action = { type: "SET_END_DATE", endDate}
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});

