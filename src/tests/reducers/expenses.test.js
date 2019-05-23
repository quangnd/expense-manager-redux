import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should setup default filter value", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "123"
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add new expense", () => {
  const expense = {
    id: "1",
    description: "xxx",
    note: "",
    amount: 195,
    createdAt: 0
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { note: "a new note" }
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].note).toBe("a new note");
});

test("should not edit an expense if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { note: "a new note" }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
