/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../product-list.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<product-list></product-list>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
