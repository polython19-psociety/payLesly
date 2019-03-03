/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../card-btn.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<card-btn></card-btn>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
