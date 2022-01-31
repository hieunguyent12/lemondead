function aaa() {
  return 1;
}

describe("example", () => {
  test("first test", () => {
    expect(aaa()).toBe(1);
  });
});

export {};
