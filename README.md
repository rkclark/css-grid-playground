# CTM React Boilerplate

A boilerplate React setup, including:
- React
- Redux (with Redux Thunk for async actions)
- React Router
- Webpack (including webpack dev server and hot module reloading)
- Jest + Enzyme
- CSS Modules
- Storybook
- ESLint with Airbnb preset

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) v3.10.10 and retains its features.
You can find the most recent version of the Create React App documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installation and Usage

The simple way to use the boilerplate is as follows:
- Clone this repo into your project
- Run `npm install`
- Run `npm start` to run the dev server
- Run `npm test` to run the test suite and begin the test watcher
- Refer to the provided files and directories for a suggested application structure
- Start building your stuff!

Further available commands are:
- `npm run storybook` - Opens the storybook
- `npm build storybook` - Create distribution files for the storybook
- `npm run build` - Create distribution files for the project
- `node server` - Serve distribution files on local express server
- `npm run serve` - Create distribution files for the project and serve them on a local express server (basically combines `npm run build` and `node server`)


## Notes

### Directory Structure

The project contains a suggested directory structure. It splits files that are relevant globally from files that are specific to routes.

At the global level, in `src`, the following are present:

- `components` directory: contains shared components
- `routes` directory: contains route specific code, including components, actions and reducers
- `actionTypes.js`: contains the actionType constants for the entire project in order to present a project-wide overview and avoid naming collisions
- `index.js`: main entry point for the app, includes top level routing and connects to Redux store
- `registerServiceWorker.js`: Example service worker setup provided by Create React App, see [here](https://goo.gl/KwvDNy) for more info.
- `store.js`: Sets up Redux store with the project's reducers and middleware.

### Example Code

Two main routes are populated with example code.

The `src/routes/App` directory contains an example of using the CSS Modules and Storybook implementation.

The `src/routes/Counter` directory contains an example of using Redux, via the classic Counter example! It shows how to split code between separate `actions.js` and `reducer.js` files.

### Testing

The project includes Jest and Enzyme for testing. Example test files are included in both the App and Counter sample routes.

Test files should be placed next to the file they are testing, with .test added to the file name. For example, `reducer.test.js` tests `reducer.js`.

### Environment Variables

This project is setup to handle development, test, load, uat, shadow and production environments.

To change any variable in any environment go to to the `/env/` directory and update the relevant config file.

`react-create-app` has setup webpack for us to handle environment variables. 

When the docker image is run you need to pass it a `CONFIG_ENV`. 
- development
- test
- load
- uat
- shadow
- production

__Note: Your variables MUST have the `REACT_APP` prefix on them__

### Production

The application is hosted by a simple `express` server. The `build` directory is routed through express.

The DockerFile will run a command to build and start your express server.

If you want to run this yourself manually you can run `npm run serve`

---
## How This Boilerplate Was Created - Step by Step

For reference, these steps were followed to create this project. Full details in the commit history, of course :)

#### Setup the Basics
1. Initialise git repo in new directory
2. Run create react app on directory
3. Eject react app
 
#### Install main dependencies
4. Run `npm install --save redux react-redux redux-thunk react-router-dom`
 
#### Install linting
5. Install packages: `npm install --save-dev eslint eslint-config-airbnb`
6. Add `.eslintrc` file that extends airbnb preset
7. Disable eslint in `src/registerServiceWorker.js`, `config/webpack.config.dev.js`, `config/webpack.config.prod.js` and `config/webpackDevServer.config.js` to supress errors
8. Update `package.json` to set eslintConfig to extend 'airbnb' rather than 'react-app'
9. Update `App.js` component to be stateless (to fix lint error)
 
#### Setup CSS Modules & Testing
10. Install dependencies: run `npm install --save-dev identity-obj-proxy enzyme react-test-renderer`
11. Update `package.json` to use identity-obj-proxy for css moduleNameMapper
12. Update CSS loader options in `webpack.config.dev.js` and `webpack.config.prod.js`
13. Remove cssTransform call in `package.json`
14. Change `App.css` to follow CSS module conventions and update the App component style import and usage accordingly
15. Setup `App.test.js` to show example basic component tests
16. Create a project level directory for global css styles: `src/css`. Add an example of css variables with `colors.css` importing colour ctm-blue into `App.css`
 
#### Storybook
17. Install storybook: run `npm install --save-dev @kadira/storybook`
18. Add storybook scripts commands into `package.json`
19. Create `.storybook` folder with webpack configuration and welcome component
20. Add an example story for the App component
 
#### React Router & Directory Structure
21. Setup top level router in `src/index.js`
22. Add 2 example routes for react-router into a route based directory structure: "/" renders a new Home component, "/app" renders the existing App component

#### Redux
23. Install React PropTypes package: `npm install --save-dev prop-types`
24. Create project-level store in `src/store.js`. Apply redux-thunk middleware and combine reducers here.
25. Update `src/index.js` to wrap the app in a react-redux Provider, connected to the store.
26. Create `src/actionTypes.js` to hold project-level action type definitions
27. Create a new route "Counter", with its files in `src/routes/Counter`. Set up an example `actions.js`, `reducer.js` and `Counter` component to show a basic Redux implementation. Include example test files for the actions and reducer.
28. Update `src/index.js` to route "/counter" to the new Counter component


#### ctm-components

29. Install ctm-components package `npm install --save @ctm/components`
30. Start importing the components for your consumption. Checkout more information about components here [https://github.com/ComparetheMarket/ctm-components](https://github.com/ComparetheMarket/ctm-components)