/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../compara-page.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<compara-page></compara-page>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
