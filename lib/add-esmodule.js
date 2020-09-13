export function cloneWithEsModuleProperty(ns) {
  const result = Object.create(null);

  Object.defineProperty(result, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true,
  });

  const propertyNames = Object.getOwnPropertyNames(ns);
  for (let i = 0; i < propertyNames.length; i++) {
    const propertyName = propertyNames[i];

    Object.defineProperty(result, propertyName, {
      get: function () {
        return ns[propertyName];
      },
      enumerable: true,
      configurable: false,
    });
  }

  if (Object.getOwnPropertySymbols) {
    const symbols = Object.getOwnPropertySymbols(ns);

    for (let i = 0; i < symbols.length; i++) {
      const symbol = symbols[i];

      Object.defineProperty(result, symbol, {
        get: function () {
          return ns[symbol];
        },
        enumerable: false,
        configurable: false,
      });
    }
  }

  Object.preventExtensions(result);
  Object.seal(result);
  if (Object.freeze) {
    Object.freeze(result);
  }
  return result;
}
