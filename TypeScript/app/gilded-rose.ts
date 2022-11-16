import { Item } from './const/types';
import { AgedBrie, Concert, Sulfuras, Conjured, DefaultItem} from './quality'


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  updateQuality() :Item[]  {
    this.items.forEach(categoryItem => {

      switch (categoryItem.name) {
        case 'Aged Brie': {
          categoryItem = AgedBrie(categoryItem)
          break;
        }
        case 'Backstage passes to a TAFKAL80ETC concert': {
          categoryItem = Concert(categoryItem)
          break;
        }
        case 'Sulfuras, Hand of Ragnaros':  {
          categoryItem = Sulfuras(categoryItem)
          break;
        }
        case 'Conjured Mana Cake':  {
          categoryItem = Conjured(categoryItem)
          break;
        }
        default: {
          categoryItem = DefaultItem(categoryItem)
        }
      }
    })
    return this.items;
  }
}
