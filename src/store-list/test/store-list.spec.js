/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../store-list.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<store-list></store-list>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
