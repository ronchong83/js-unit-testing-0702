const { Shop, Item } = require("./gilded_rose.js")

describe("Gilded Rose", () => {
  it("should reduce sellin and increase quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(3)
  });
  it("should reduce sellin and increase quality twice as fast for Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Aged Brie")
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(4)
  });
  it("should reduce sellin and quality", () => {
    const gildedRose = new Shop([new Item("Rose", 2, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Rose")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(1)
  });
  it("should reduce sellin and increase quality", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(5)
  });
  it("should not change in sellin and quality", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros")
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(2)
  });
  it("should reduce quality if less than 0 sellin for others", () => {
    const gildedRose = new Shop([new Item("Rose", -1, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Rose")
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(0)
  });
  it("should reduce to 0 quality if less than 0 sellin for Backstage", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 2)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(0)
  });
  
});