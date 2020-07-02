const { Shop, Item } = require("./gilded_rose.js")

let gildedRose = new Shop([new Item("Aged Brie", 2, -1)])

describe("Gilded Rose", () => {
  it("to test quality < 0", () => {
    gildedRose.quality = -1
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(0)
  });
    
  it("to test quality = 0", () => {
    gildedRose.quality = 0
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(1)
  });

  it("to test quality > 0 and < 50 ", () => {
    gildedRose.quality = 5
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(3)
  });

  it("to test quality = 50 ", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toEqual(50)
  });

  it("to test quality > 50 ", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 51)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(51)
  });
});

describe("Backstage Passes", () => {
  it("should foo", () => {
    const backstagePass = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 0)])
    const items = backstagePass.updateQuality()
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(3)
  });
});

describe("Sulfuras", () => {
  it("should foo", () => {
    const sul = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 0)])
    const items = sul.updateQuality()
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros")
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(0)
  });
});