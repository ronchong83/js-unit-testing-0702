const { Shop, Item } = require("./gilded_rose.js")

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(1)
  });
});

/**

TDD - Test Driven Development

1. Write a failing test case
2. Write just enough code to pass that failing test
3. Refactor

 */