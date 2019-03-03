/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../card-grid.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<card-grid></card-grid>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
