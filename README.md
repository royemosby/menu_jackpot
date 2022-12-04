# Code the Dream React debugging exercise

## TOC

- CTD debugging exercise introduction
- Menu Jackpot introduction
- Development: getting started
- Customizing
- Troubleshooting exercise

## CTD debugging exercise introduction

Oh no! It does not work! There are 6 issues that have been placed in the code. To get Menu Jackpot working, you will have read through browser console and terminal messages to work though the bugs. 5 issues will display errors. The final issue is visual so the app will not look the same as the working demo.

- See the "Getting started" section to set up this project.
- See the "Troubleshooting exercise" for instructions.

*note* There is a solution branch b ut *no peaking*!

[View a working demo of Menu Jackpot](https://menu-jackpot.onrender.com/)

## Menu Jackpot introduction

As someone who helps run a household, one of the many chores includes putting together a weekly meal plan so you can go shopping. This gets tedious at time so Menu Jackpot is here to help you out! Press the spin button and each one of the reels will spin to a random meal. Use the hold button to freeze a desired meal and then hit the spin button again. In no time, you will have complete meal plan!

## Development: getting started

1. Fork this repo and then clone to your local development environment.
2. In your terminal, navigate into the project's base directory and issue the command `yarn install`. This will install React and all the project dependencies.
3. Type `yarn start` to start up the project.
4. Your default browser will open the app on localhost:3000
5. While the app is being served, it will refresh with saved code edits. (You will have to refresh the browser to reset the spins if "Spin the meals" button has been pressed)

## Customizing

Currently, the app is pre-loaded with 80+ main courses. There are side dishes in there for future app expansion but are unused right now. To add new meals, go to `src>assets>mealList.js` where there is a JS array of "meal" objects. Each object consists of a `name` and `type` property. To add new meals, scroll to the bottom of the file and create a new meal object in the array. Removal can be done by removing or commenting out the meal object.

## Troubleshooting exercise

1. After starting the application, you will see a variety of error messages in your browser console and terminal.
2. Work through each in turn, paying close attention to the error messages. Stack traces in errors can get rather lengthy but they will often include important information like the filename and line of the error. Some will even include suggested fixes.
3. One error will be visual in nature so you will have to compare the local version to the working demo linked above.
4. Once you verify the application runs without error and visually looks the same as the demo, submit a PR on your own cloned repo. Submit that link same as other assignments.
