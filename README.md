# imgs

This repository is for a web-app called **imgs-lite**. It fetches the gallery images from imgur.com and displays them in a rather lite and simple layout. See the app in production here:

https://imgs-lite.herokuapp.com/

## App Structure

This is an app with Node/Express + React/Redux stack. In production, Express server serves both React app (the client) and responds to API calls from React app. Production app is deployed on Heroku.

In development, it is recommended to run the two apps seperately: React serving on port 3000 and proxying its API calls to Express which is running on 5000. Instructions on how to set up your local environment is explained in the next section.

Both of these apps have their separate dependencies and `package.json`s. You can inspect the `package.json` scripts to get the full picture about running the apps on both your local machine and in production.

## Setting up your local dev environment

As **PREREQUISITES**, make sure you have `npm` installed on your local machine and install the project dependendencies with it:

- `npm install` installs server dependencies
- `npm run install-client` installs client dependencies (just a shortcut for `cd client && npm install`)

It is also **ESSENTIAL** that you have an `.env` file with your `IMGUR_CLIENT_ID` in it. In the absence of this environmental variable, the app won't be able to fetch images from imgur.com and thus, won't be able to work properly.

When you satisfy the prerequisites, you may run the following scripts on the root of the project:

- `npm run start-client` starts the React app on port 3000
- `npm run start-dev` starts the Express app on port 5000 (with `nodemon`)

This is the recommended way to do development as it allows hot-reloading on both apps and see their outputs on respective terminals.

## Tests

There are a number of test suites for the React app. `npm test` on client's `package.json` runs and watches them:

- `cd client && npm test`
