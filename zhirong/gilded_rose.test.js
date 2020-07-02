const { Shop, Item } = require("./gilded_rose.js")

describe("Gilded Rose", () => {
  it("should reduce sellIn and increase quality for Aged Brie", () => {
    const agedBrie = new Item("Aged Brie", 2, 2)
    const gildedRose = new Shop([agedBrie])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(agedBrie.name)
    expect(items[0].sellIn).toEqual(agedBrie.sellIn - 1)
    expect(items[0].quality).toEqual(agedBrie.quality + 1)
  });
  it("should reduce sellIn and increase quality twice as fast for Aged Brie sellin <= 0", () => {
    const agedBrie = new Item("Aged Brie", 0, 2)
    const gildedRose = new Shop([agedBrie])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(agedBrie.name)
    expect(items[0].sellIn).toEqual(agedBrie.sellIn - 1)
    expect(items[0].quality).toEqual(agedBrie.quality + 2)
  });
  it("should reduce sellIn and quality for Others", () => {
    const others = new Item("Others", 2, 2)
    const gildedRose = new Shop([others])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(others.name)
    expect(items[0].sellIn).toEqual(others.sellIn - 1)
    expect(items[0].quality).toEqual(others.quality - 1)
  });
  it("should reduce sellIn and increase quality by 3 if sellIn < 6 for Backstage", () => {
    const backStage = new Item("Backstage passes to a TAFKAL80ETC concert", 2, 2)
    const gildedRose = new Shop([backStage])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(backStage.name)
    expect(items[0].sellIn).toEqual(backStage.sellIn - 1)
    expect(items[0].quality).toEqual(backStage.quality + 3)
  });
  it("should reduce sellIn and increase quality by 2 if sellIn >= 6 for Backstage", () => {
    const backStage = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 2)
    const gildedRose = new Shop([backStage])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(backStage.name)
    expect(items[0].sellIn).toEqual(backStage.sellIn - 1)
    expect(items[0].quality).toEqual(backStage.quality + 2)
  });
  it("should reduce sellIn and increase quality by 1 if sellIn >= 11 for Backstage", () => {
    const backStage = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 2)
    const gildedRose = new Shop([backStage])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(backStage.name)
    expect(items[0].sellIn).toEqual(backStage.sellIn - 1)
    expect(items[0].quality).toEqual(backStage.quality + 1)
  });
  it("should not change in sellIn and quality for Sulfuras", () => {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 2, 2)
    const gildedRose = new Shop([sulfuras])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(sulfuras.name)
    expect(items[0].sellIn).toEqual(sulfuras.sellIn)
    expect(items[0].quality).toEqual(sulfuras.quality)
  });
  it("should reduce quality twice as fast if less than 0 sellIn for others", () => {
    const others = new Item("Others", -1, 2)
    const gildedRose = new Shop([others])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(others.name)
    expect(items[0].sellIn).toEqual(others.sellIn - 1)
    expect(items[0].quality).toEqual(others.quality - 2)
  });
  it("should reduce to 0 quality if less than 0 sellIn for Backstage", () => {
    const backStage = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 5)
    const gildedRose = new Shop([backStage])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe(backStage.name)
    expect(items[0].sellIn).toEqual(backStage.sellIn - 1)
    expect(items[0].quality).toEqual(backStage.quality - backStage.quality)
  });
  
});