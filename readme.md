# webpack issue

1. try building without aria

```sh
yarn build:noaria
```

You'll see a new JS file, hurray!

2. try building with aria

```sh
yarn build:aria
```

NOTHING! errors. bummer. Here are the errors:

```
ERROR in ./node_modules/bindings/bindings.js
Module not found: Error: Can't resolve 'fs' in '/webpack-issue-cli/node_modules/bindings'
 @ ./node_modules/bindings/bindings.js 5:9-22
 @ ./node_modules/node-expat/lib/node-expat.js
 @ ./node_modules/xml2js-expat/lib/xml2js.js
 @ ./node_modules/aria/aria.js
```
