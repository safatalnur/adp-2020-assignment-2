# Math Addition Game

Simple React Native Game where the player is given a target number and 6 random numbers
between 1 to 9. The player has to add numbers from the given 6 random numbers to
achieve the target number on the top.  For each game, there is 10 seconds time limit
to achieve the goal.

1) If the target number is grey then keep playing
2) If the target number turn red that means you lose 
3) If the target number turn green that mean you win

# Create React Native App

Create React Native apps with no build configuration.

## Quick Overview

Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.

```sh
$ npm install -g expo-cli
$ expo init my-app
$ cd my-app/
$ npm start
```

The `npm start` command starts the Expo CLI server. You can now run the project on your phone by using the Expo app.

### Android

- Install the [Expo](https://expo.io) app on your Android device.
- Scan the QR code in your terminal from the Expo app to run the project on your phone.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

### iOS

- Install the [Expo](https://expo.io) app on your iOS device.
- Press 'e' in the terminal to send the app link to your email address or phone number. This link can be used to run your project from the Expo app.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

Expo CLI allows you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the Expo app provides.


-----------------------------------------------------------------------------------------

# ADP Assignment 2

Create a simple game using React Native, you are expected to demonstrate your knowledge and proper use of basic react features, and your ability to utilize javascript as a programming language.

Some of the grading criteria is the same as A1, this is because ideas like having a modular structure, good coding styles and conventional commit messages are always expected from your code.

## Topics

* React
* React Native
* Expo

## Getting Started

1. Use `expo init` to start a new React Native project
2. Start coding from `App.js`
3. View the app in a web browser or iOS/Android simulator

For the purpose of this assignment, your React Native project should be managed by Expo, ejection for further fine tuning is not only not required, you are recommended to keep your app within what Expo can manage and avoid ejection.

## Grading Criteria

1. Use React, React Native, and Expo
   1. Make sure your React Native's node module is setup properly using Expo's distribution
   2. Change your app's splash screen via Expo's `app.json`
2. Proper structuring of components
   1. Create a modular architecture by spliting the application into components
   2. Proper use of *context*, states, and props to share data between components.
   3. State and props should not rerender excessively - components that are not intended to re-render should be affected by unrelated changes to the web app
3. At least one legitimate use of the *useEffect* hook
4. Use 3rd party component library for app paging (e.g. Home Screen, Game Screen, etc.), you can use `react-router-native` or `react-navigation`
5. Good coding style, this includes having comments, proper indentation, self-explanatory variable/function names, etc.
6. Git, and commit your code regularly.
   1. Use conventional commit messages. See: https://www.conventionalcommits.org/en/v1.0.0-beta.4/
   2. If you only have one commit in your git repo you will not receive any points for git. **Commit often**
   3. If you branched out to develop features and bug fixes, make sure you push these branches to the remote as well, these are good practices and will be take into consideration for your Git score.

## Bonus Extensions

1. Use functional components for all components and hooks to manage all state
2. Use a third party hook (hint: if you are using `react-router-native` or `react-navigation`, the use of their hooks is most probably inevitable)
3. Use useReducer or Redux