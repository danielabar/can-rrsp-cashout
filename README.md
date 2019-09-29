# can-rrsp-cashout

[![CircleCI](https://circleci.com/gh/danielabar/can-rrsp-cashout.svg?style=svg)](https://circleci.com/gh/danielabar/can-rrsp-cashout)

> Calculator for low income Canadians approaching retirment age to understand whether (and by how much) they would be better off cashing out their RRSPs before 65 based on GIS eligibility and income.

This project was inspired by an episode of the Mostly Money podcast on [The upside-down world of financial planning for low-income Canadians](https://www.stitcher.com/podcast/preet-banerjee/mostly-money-mostly-canadian/e/59296571).

## Development

1. Install the Node.js version as specified in [.nvmrc](.nvmrc) file in root of this project. The recommended way to install Node is with [nvm](https://github.com/nvm-sh/nvm) (Mac, Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows).
2. From project root, install the dependencies (only needed once or whenever dependencies change):
   ```bash
   $ npm install
   ```
3. Install [editorconfig](https://editorconfig.org/) plugin for whatever editor/IDE you're using.
4. Install [prettier](https://prettier.io/) plugin for whatever editor/IDE you're using (VS Code users - disable Beautify plugin if you have itfor this project workspace)
5. Start a development server - this will open a new browser tab at [http://localhost:3000](http://localhost:3000)
   ```bash
   $ npm start
   ```
6. Open another terminal tab and run tests, keep this tab open during development, the tests will re-run whenever any related files are modified:
  ```bash
  $ npm test
  ```

### Supported by BrowserStack
Thanks to [BrowserStack](https://browserstack.com/) for their support of this open-source project.

<img src="doc-images/browserstack-logo.svg" alt="Browserstack logo" width="150"/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
