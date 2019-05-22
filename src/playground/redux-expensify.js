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
    sortBy: "blabla",
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

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});


const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const setTextFilter = text => ({
  type: "SET_TEXT_FILTER",
  text
});

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

// Reducers
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(e => e.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

const filtersReducer = (state = demoState.filters, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  console.log(expenses)
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      return a.amount < b.amount ? 1 : -1;
    });
};

// Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Dispatch
const expenseOne = store.dispatch(
  addExpense({
    description: "Water bill",
    note: "Some note",
    amount: 56400,
    createdAt: 0
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Electric bill",
    note: "NOte 2",
    amount: 12334,
    createdAt: 0
  })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(
  editExpense(expenseOne.expense.id, {
    amount: 1000
  })
);

store.dispatch(setTextFilter("Electric"));
store.dispatch(sortByAmount());

store.dispatch(setStartDate(123)); //123
store.dispatch(setStartDate()); //undefined
store.dispatch(setEndDate(456)); //456
