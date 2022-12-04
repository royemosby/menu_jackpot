# Code the Dream React debugging exercise

Houston, we have a problem! There are XX number of issues that have been placed in the code. To get Menu Jackpot working, you will have read through browser console  and terminal messages to work though the bugs. See the "Getting started" section to set up this project.

*note* There is a solution branch but *no peaking*!

[View a working demo of Menu Jackpot](https://menu-jackpot.onrender.com/)

## Menu Jackpot Introduction

As someone who helps run a household, one of the many chores includes putting together a weekly meal plan so you can go shopping. This gets tedious at time so Menu Jackpot is here to help you out! Press the spin button and each one of the reels will spin to a randomly chosen meal. Use the hold button to freeze a desired meal and then hit the spin button again. In no time, you will have meal planning done and out of the way!

## Getting started

1. Fork this repo and then clone to your local development environment.
2. In your terminal, navigate into the project's base directory and issue the command `yarn install`. This will install React and all the project dependencies.
3. Type `yarn start` to spin up the project.
4. A browser will open the app on localhost:3000 and will refresh with saved code edits.

## Troubleshooting exercise

1. After starting the application, you will see a variety of error messages in your browser console and terminal.
2. Work through each in turn.

## Customizing

Currently, the app is pre-loaded with 80+ main courses. There are side dishes in there for future app expansion but are unused right now. To add new meals, go to `src>assets>mealList.js` where there is a JS array of "meal" objects. Each object consists of a `name` and `type` property. To add new meals, scroll to the bottom of the file and create a new meal object in the array. Removal can be done by removing or commenting out the meal object.
