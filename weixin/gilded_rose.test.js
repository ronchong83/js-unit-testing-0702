const { Shop, Item } = require("./gilded_rose.js")

describe("Gilded Rose", () => {
    it("Aged Brie should increase in quality after each day", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 2, 0)])
        const items = gildedRose.updateQuality()
        expect(items[0].name).toBe("Aged Brie")
        expect(items[0].sellIn).toEqual(1)
        expect(items[0].quality).toEqual(1)
    });


    it("items should decrease in quality after each day", () => {
        const gildedRose = new Shop([new Item("Not Aged Brie", 2, 1)])
        const items = gildedRose.updateQuality()
        expect(items[0].name).toBe("Not Aged Brie")
        expect(items[0].sellIn).toEqual(1)
        expect(items[0].quality).toEqual(0)
    });


    it("quality should never be negative", () => {
        const gildedRose = new Shop([new Item("Not Aged Brie", 2, 0)])
        const items = gildedRose.updateQuality()
        expect(items[0].name).toBe("Not Aged Brie")
        expect(items[0].sellIn).toEqual(1)
        expect(items[0].quality).toEqual(0)
    });

    it('quality degrades twice as fast after sell date', () => {
        const gildedRose = new Shop([new Item("Not Aged Brie", 0, 10)])
        const items = gildedRose.updateQuality()
        expect(items[0].name).toBe("Not Aged Brie")
        expect(items[0].sellIn).toEqual(-1)
        expect(items[0].quality).toEqual(8)
    })

    it('quality of item should not exceed 50', () => {
        const gildedRose = new Shop([new Item("Aged Brie", 2, 50)])
        const items = gildedRose.updateQuality()
        expect(items[0].name).toBe("Aged Brie")
        expect(items[0].sellIn).toEqual(1)
        expect(items[0].quality).toEqual(50)
    })

    it('Sulfuras never degrades in quality or sellIn days', () => {
        const Sulfuras = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 10)])
        const items = Sulfuras.updateQuality()
        expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros")
        expect(items[0].sellIn).toEqual(2)
        expect(items[0].quality).toEqual(10)
    })

    it('Backstage passes increases by 2 in quality when there are 10 days or less to the concert', () => {
        const backstagePasses = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)])
        const items = backstagePasses.updateQuality()
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
        expect(items[0].sellIn).toEqual(9)
        expect(items[0].quality).toEqual(12)
    })

    it('Backstage passes increases by 3 in quality when there are 5 days or less to the concert', () => {
        const backstagePasses = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)])
        const items = backstagePasses.updateQuality()
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
        expect(items[0].sellIn).toEqual(4)
        expect(items[0].quality).toEqual(13)
    })

    it('Backstage passes quality is 0 after the concert', () => {
        const backstagePasses = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 100)])
        const items = backstagePasses.updateQuality()
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
        expect(items[0].sellIn).toEqual(-1)
        expect(items[0].quality).toEqual(0)
    })

    it('Backstage passes quality cannot exceed 50', () => {
        const item = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50)])
        const items = item.updateQuality()
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert")
        expect(items[0].sellIn).toEqual(4)
        expect(items[0].quality).toEqual(50)
    })

    it('Aged Brie increases quality twice as fast', () => {
        const gildedRose = new Shop([new Item("Aged Brie", 0, 10)])
        const items = gildedRose.updateQuality()
        expect(items[0].name).toBe("Aged Brie")
        expect(items[0].sellIn).toEqual(-1)
        expect(items[0].quality).toEqual(12)
    })
});