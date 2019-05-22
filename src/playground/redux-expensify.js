import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const demoState = {
  expenses: [
    {
      id: 0,
      description: "Here is the des",
      note: "Some note",
      amount: 56400,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};

// Action creators
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});

// Reducers
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(e => e.id !== action.id)
    default:
      return state;
  }
};

const filtersReducer = (state = demoState.filters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
const expenseOne = store.dispatch(
  addExpense({
    description: "Here is the des",
    note: "Some note",
    amount: 56400,
    createdAt: 0
  })
);

const expenseTwo= store.dispatch(
  addExpense({
    description: "Des 2",
    note: "NOte 2",
    amount: 12334,
    createdAt: 0
  })
);

console.log(expenseOne)

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
