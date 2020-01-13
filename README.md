### Start the project

- yarn
- yarn start

### Created a production ready build

- yarn build

### STACK

- React
- Redux (redux-thunk)
- Jest
- Sass

### Project structure

src/
pages/
components/
generic/
pageSpecificComponents/
redux/
example/
reducer.js
actions.js
types.js
jest/
lib/
pages/
example/
index.js
styles.js
styles

Note: This is how it goes:

- pages/: Here we should store all the container components, in this case, those components will commonly be application pages or sections such as Landing, Login, etc...
- components/: All reusable and dummy components should be placed in this folder, there's <<generic/>> folder, which will be used to store all generic components, which are not specific to any page. EX: buttons, inputs, layout...
- redux/: Actions, reducers and type files should be placed here, and they should be grouped in a folder named with their respective Page (Container component, or app section)
- lib: This will be used to place utils, helpers, parsers, api, translation and other goodies.
- styles: Sass core will be placed here, including constant files such as: colors.scss, breakpoints.scss, fonts.scss

Principles:

- Dummy components are always representational, they should never be aware of redux
- Use functional components instead of classes (Unless you got a really good reason, you should notify the team)
- Use models and repositories to store all api calls, and sanitize data (also formatting).
- Avoid writing huge components, try to split them into smaller components. And remember, those smaller components should have a single responsability (This also applies when writing functions).
- I encourage you to use advanced composition techniques such as: HOC, render props, etc...
- I will always encourage you to write reusable code, but, if making something reusable makes it extremely hard to implement due to its complex abstraction, don't. Sometimes is better to have 2 different functions that do similar things, but are extremely readable and easy to implement, that 1 huge function that can do both things but which complexity starts to be a problem.

### Things to improve:

- Redux helper libraries to reduce boilerplate
- Change redux-thunk to -sagas or -observable, to handle side effects. This to improve project scalability.
- Create a full wireframe, and UI elements library (Or use an existing one, Ex: material-ui)
- Improve tests

# Happy coding!
