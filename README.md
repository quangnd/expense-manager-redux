# Expensify Manager with Redux

## Features

- [X] Add redux to CRA.
- [ ] Playground with redux at `src/playground/redux101.js`.
- [ ] Connect Redux & React.
- [ ] Add React router.
- [ ] CRUD expense.
- [ ] Testing with JEST & Enzyme.

## Guides

1. Install Redux `npm install --save redux`.
2. Install another library `npm install --save uuid react-router-dom`.
3. Playground with redux to understand basic concepts at `src/playground/redux101.js`.
- [X] Create store.
- [X] Dispatch actions.
- [X] Refactor code to Action creators.
- [X] Add reducer.
4. Add basic Expense components.
5. Playground with redux at `src/playground/redux-expensify.js`.


## Concepts

1. Actions
- Actions are payloads of information that send data from your application to your store.
- They describes what happened. They are the only source of information for the store.

2. Reducers
- Specify how the application's state changes in response to **actions** sent to the store.
- When you want to split your data handling logic, you'll use **reducer composition**.
- Reducers are **pure functions**.
- Never change state or action.

3. Store
- Holds application state;
- Allows access to state via `getState()`;
- Allows state to be updated via `dispatch(action)`;
- Registers listeners via `subscribe(listener)`;
- Handles unregistering of listeners via the function returned by `subscribe(listener)`.
- Note: Only have **a single store** in a Redux application

## References

1. [redux.org](https://redux.js.org)
