export function cloneWithEsModuleProperty(ns) {
  const result = Object.create(null);

  Object.defineProperty(result, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true,
  });
  const descriptors = Object.getOwnPropertyDescriptors(ns);
  for (let propertyName in descriptors) {
    Object.defineProperty(result, propertyName, {
      get() {
        return ns[propertyName];
      },
      enumerable: true,
      configurable: false,
    });
  }

  Object.preventExtensions(result);
  Object.seal(result);
  if (Object.freeze) {
    Object.freeze(result);
  }
  return result;
}
