import assert from "assert";
import { cloneWithEsModuleProperty } from "../lib/add-esmodule.js";
import * as basic from "./fixtures/basic.js";
import * as liveBindings from "./fixtures/live-bindings.js";

describe("cloneWithEsModuleProperty", () => {
  it("adds the __esModule property to an ES module", () => {
    assert.strictEqual(basic.__esModule, undefined);
    assert.strictEqual(Object.hasOwnProperty.call(basic, "__esModule"), false);

    const withEsModule = cloneWithEsModuleProperty(basic);

    assert.strictEqual(withEsModule.__esModule, true);
    assert.strictEqual(
      Object.hasOwnProperty.call(withEsModule, "__esModule"),
      true
    );
  });

  it("works with live bindings", () => {
    const withEsModule = cloneWithEsModuleProperty(liveBindings);
    assert.strictEqual(liveBindings.cnt, 0);
    assert.strictEqual(withEsModule.cnt, 0);

    liveBindings.increment();

    assert.strictEqual(liveBindings.cnt, 1);
    assert.strictEqual(withEsModule.cnt, 1);
  });

  it("freezes the object", () => {
    const withEsModule = cloneWithEsModuleProperty(basic);
    assert.strictEqual(Object.isSealed(withEsModule), true);
    assert.strictEqual(Object.isExtensible(withEsModule), false);
    assert.strictEqual(Object.isFrozen(withEsModule), true);
  });
});
