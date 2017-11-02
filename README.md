# fx63
Another Vue.js TypeScript template optimized for multiple entries and common chunks.

## Installation
npm:
``` sh
npm install -g vue-cli
vue init mgenware/fx63 my-project
cd my-project
npm install
```

yarn
```sh
yarn global add vue-cli
vue init mgenware/fx63 my-project
cd my-project
yarn
```

## Differences from original vue-webpack-template

* Add a `dev-build` script(`npm run dev-build` or `yarn dev-build`). like `npm build`, but **watch** all files and build sources in **development** mode.
* Enable relative paths resolving in webpack. Use `import 'lib/blabla'` instead of `import '../../../lib/blabla'`.
* Optimized for multiple entries and common chunks. See details below.

* TypeScript support.
  * Use `awesome-ts-loader` as webpack loader.
  * Use `tslint` to lint TypeScript code.

### Dist
* `npm build` files are written to `dist/prod`.
* `npm dev-build` files are written to `dist/dev`.

### Support for multiple entries and common chunks
Upon creation, the project structure is like:
```
lib1/      // user libraries
lib2/      // user libraries
entry1.js  // entry file 1
entry2.js  // entry file 2
```

The generated project is configured as:
* Webpack runtime will be written to `manifest.js`.
* All dependencies inside `node_modules` or `src/lib1` will be written to `vendor` chunk.
* All dependencies inside `src/lib2` will be written to `another_vendor` chunk.
* Both entries(`entry1.js` and `entry2.js`) are using deps from `node_modules`, `src/lib1` and `src/lib2`.

After build, the `dist` will be:
```
js/
  manifest.js       // the webpack runtime
  vendor.js         // dependencies inside `node_modules` or `src/lib1`
  another_vendor.js // dependencies inside `src/lib2`
  entry1.js         // entry1 code
  entry2.js         // entry2 code

css/
  vendor.css         // dependencies inside `node_modules` or `src/lib1`
  another_vendor.css // dependencies inside `src/lib2`
  entry1.css         // entry1 code
  entry2.css         // entry2 code
```
