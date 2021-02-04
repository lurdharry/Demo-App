# Mysense's test app [![lurdharry](https://circleci.com/gh/lurdharry/mySense_Test.svg?style=svg&circle-token=f836a377d42dc7ef0c1d0d308fedf6138c0c0934)](https://github.com/lurdharry/mySense_Test)

## Getting Started

- Fork or Clone the repo, then set it up:

```
$ cd MySenseTask
$ yarn install
```

## Run the project

- run the app - `yarn ios`/`yarn android`

## A brief description of the project

- The MySense kit is installed in a user’s house, which will send data to our backend when various events occur. We would like you to create an application in React Native to display these events with the ability to mark them as acknowledged.

### Task

1. Bootstrap a Typescript React Native project using [Expo](https://expo.io/).

2. Hit a mock endpoint for a list of events using [react-query](https://react-query.tanstack.com/).

3. Display the list of events as clickable cards.

4. Clicking on an event will navigate to an event details page.

5. You can mark an event as acknowledged from this page.

6. Upon returning to the event list that event will have a different style to show that it has been acknowledged.

## Solution

1.  Fetched the list of event with useQuery method of react-query library.
2.  Displayed the list of data with [FlatList](https://reactnative.dev/docs/flatlist.html).

    - For a huge list of items `FlatList` is the most efficient way to render , because it has lazy loading and only shows what's on the screen at any moment.

3.  Implemented app navigation with react-navigation.
4.  Implemented transition using react-navigation-shared-element to animate event icon in homeScreen to detail screen.
5.  Used [react-Context-API](https://reactjs.org/docs/context.html) for Global state to hold the list of `acknowledged` events.
6.  Added dispatch action (with context API) to `acknowledge Button` with the purpose of flagging the event as `acknowledged`.
7.  Added condition to change the title of `acknowleged button` if the event is acknowledged.
8.  Navigating to HomeScreen, Added conditional check to the event card to check if an event has been acknowledged. The style of the card is updated if the condition is met.
9.  Used `jest`,`react-test-renderer` and `testing-library/react-native` for component and unit test.
