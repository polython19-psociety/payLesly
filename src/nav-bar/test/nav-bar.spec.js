/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../nav-bar.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<nav-bar></nav-bar>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
