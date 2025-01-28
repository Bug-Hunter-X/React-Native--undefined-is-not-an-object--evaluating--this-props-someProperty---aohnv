# React Native: undefined is not an object (evaluating 'this.props.someProperty')

This repository demonstrates a common error in React Native: attempting to access `this.props` or `this.state` before the component has fully mounted. This leads to `undefined is not an object` errors.

## Problem

The `bug.js` file shows how incorrectly accessing `this.props` within the `constructor` or before the component is mounted can result in errors.  React Native requires that components have fully initialized props and state before accessing them.

## Solution

The `bugSolution.js` file provides the corrected implementation. It initializes state with default values and accesses props safely within `componentDidMount` after the component has fully mounted.

## How to Run

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` (or `npx react-native run-ios`) to start the app.