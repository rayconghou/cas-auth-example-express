# Yale SWE CAS Auth Example App

## Overview

CAS stands for Central Authentication System. When creating apps for this course, you may find the need to authenticate students using Yale's CAS (ex. CourseTable). This example project uses Yale CAS to implement a simple sign-in/sign-out.

## Running This App Locally

To run this app locally, there are some prerequisites:

- [Node v16.14](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

Once you installed all the stuff above, follow these directions:

1. Run `yarn install:all`. This will install all of the necessary npm packages.
2. Open another terminal window and run `yarn dev:server`. This will run the REST API on port `4000`.
3. Open another terminal window and run `yarn dev:client`. This wll serve the client on port `3000`.

After completing the steps above, you should be able to go to `http://localhost:3000` on your browser and see the app.
