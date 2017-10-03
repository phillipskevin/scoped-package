# @phillipskevin/scoped-package

[![Build Status](https://travis-ci.org/phillipskevin/@phillipskevin/scoped-package.svg?branch=master)](https://travis-ci.org/phillipskevin/@phillipskevin/scoped-package)



## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from '@phillipskevin/scoped-package';
```

### CommonJS use

Use `require` to load `@phillipskevin/scoped-package` and everything else
needed to create a template that uses `@phillipskevin/scoped-package`:

```js
var plugin = require("@phillipskevin/scoped-package");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/@phillipskevin/scoped-package/dist/global/@phillipskevin/scoped-package.js'></script>
```
