/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../select-product.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<select-product></select-product>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
