import { Item } from './const/types'

const min = 0;
const max = 50;

const under = quality => quality < max
const over = quality => quality > min

const increase = quality => under(quality) ? quality + 1 : quality
const decrease = quality => over(quality) ? quality - 1 :  quality

const increaseConcert = (item: Item): number => {
  let quality = increase(item.quality);
  quality = item.sellIn < 11 ? increase(quality) : quality;
  quality = item.sellIn < 6 ? increase(quality) : quality;

  return quality
}

export const Concert = (item) :Item => {
  item.quality = item.sellIn === 0 ? 0 : increaseConcert(item);
  item.sellIn -= 1

  return item;
}
export const AgedBrie = (item) :Item =>  {
  item.quality = increase(item.quality)
  item.quality = item.sellIn < 0 ? increase(item.quality) : item.quality
  item.sellIn -= 1;

  return item
}
export const Sulfuras = (item) :Item => {
  item.quality = 80;

  return item
}

const updateConjuredQuality = (item):Item  => {
  item.quality  = changeQuality(item)
  item.quality = changeQuality(item)
  return item
}

export const Conjured = (item) :Item => {
  if (item.sellIn === 5) {
    item.quality -= 3
  } else {
      item = changeQuality(item)
      item = changeQuality(item)
  }

  if ( item.quality <0 ){
    item.quality = 0
  } else {
    item.sellIn -= 1
  }

  return item
}

const changeQuality = (item): Item => {
  item.quality = decrease(item.quality);
  item.quality = item.sellIn <= 0 ? decrease(item.quality) : item.quality

  return item
}

export const DefaultItem = (item) :Item => {
  item = changeQuality(item)
  item.sellIn -= 1

  return item
}
