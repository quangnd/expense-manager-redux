import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "100" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "100"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("100", {
    description: "mun",
    note: "new note",
    amount: 100
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "100",
    updates: {
      description: "mun",
      note: "new note",
      amount: 100
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const expense = {
    description: "water bill",
    note: "new note",
    amount: 10,
    createdAt: 100
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
