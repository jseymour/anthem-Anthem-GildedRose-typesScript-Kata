import { Item, GildedRose } from '@/gilded-rose';
let data = require('testData.json');



describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose(data.data);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});
