# React
React Learnings by example

## How to run examples?

- The repository has `src` folder in which the examples files are present. To execute the code the example file need to be renamed to `index.js` and it has to be directly under `src` directory. This repository is just for learning purpose.

## Here's what each package does:

- `react`: UI library for creating modular components
- `react-dom`: enables us to render the React within the browser DOM
- `webpack`: bundler that converts your source code into production-ready output
- `webpack-cli`: allows webpack to work with CLI commands
- `webpack-dev-server`: transforms our source code and serves it on a web server as we develop it continuously. This helps use see the output of your code in the browser.
- `html-webpack-plugin`: an extension to webpack that adds the basic index html file
- `@babel/core`: a JavaScript transpiler to converts modern JavaScript into a production-ready version that's compatible with all browsers.
- `babel-loader`: connects Babel to webpack's build process
- `@babel/preset-env`: group of commonly used Babel plugins bundled into a preset that converts modern JavaScript features into widely compatible syntax
- `@babel/preset-react`: React-specific Babel plugins that convert JSX syntax into plain old JavaScript that browsers can understand

Quick note: `--save-dev` flag is for partitioning the dependencies into development-specific dependencies, so that they are not included in the production JavaScript bundle
