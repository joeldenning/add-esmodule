# add-esmodule

Add \_\_esModule property to native ES module objects

## Motivation

Much of the javascript ecosystem relies of ES modules having an `__esModule` property. However, native ES modules do not have that property. This project is a workaround for that problem.

## Installation

```sh
npm install --save add-esmodule

# alternative
yarn add add-esmodule
```

## Usage

```js
import foo from "foo";
import { cloneWithEsModuleProperty } from "add-esmodule";

const fooCompat = cloneWithEsModuleProperty(foo);

foo.__esModule; // undefined
fooCompat.__esModule; // true
```

## Browser compatibility

add-esmodule works in IE 11+

## Implementation notes

- Live Bindings for modules are supported (via object getters on the cloned object)
- The cloned module object is frozen
- Symbols, including toString, are properly cloned
