# Expensify Manager with Redux

## Features

- [X] Add redux to CRA.
- [X] Playground with redux at `src/playground/redux101.js`.
- [X] Connect Redux & React.
- [X] Add React router.
- [X] CRUD expense.
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
6. Playground with hoc at `src/playground/hoc.js`.
7. Playground with destructuring (obj & array) at `src/playground/destructuring.js`.
8. Re-organize redux folders.
9. Install `react-redux` package to connect redux and react.
10. Install moment, [react-dates](https://github.com/airbnb/react-dates)
11. Testing
- Install test tools `npm install --save enzyme enzyme-adapter-react-16 react-test-renderer`
- Configured Enzyme in the global setup file: `src/setupTests.js` (CRA auto pick this file at this location)
- To print snapshot in JSON, we need to install `npm install --save-dev enzyme-to-json`.
- Update your `package.json`
```
"jest": {
  "snapshotSerializers": ["enzyme-to-json/serializer"]
}
```
- If we want to use another location for `setupTests.js`, add this code to jest config in package.json (*this is not currently supported by Create React App*)
```
"setupFiles": ["./src/setupTests.js"],
```

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
2. [CRA running test document](https://facebook.github.io/create-react-app/docs/running-tests)
3. [Testing React with Jest and Enzyme Part I](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)
