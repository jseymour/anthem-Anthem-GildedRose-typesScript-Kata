import { expect } from 'chai';
import { GildedRose } from '@/gilded-rose';
import { Item } from '@/const/types';
import {AgedBrie, Concert, Conjured, Sulfuras} from "@/quality";
let data = require('./testData.json');

describe('Gilded Rose', () => {

  let days;

  beforeEach(function(){

  })

  it('should be able to take a new item', () => {
    const gildedRose = new GildedRose([ new Item('Anchor Steam Beer', 37.46, 122.24) ]);
    const added = gildedRose.items[0]
    expect(added.name).to.equal('Anchor Steam Beer');
    expect(added.sellIn).to.equal(37.46);
    expect(added.quality).to.equal(122.24);
  });

  it('quality should never go below 0', () => {
    const gildedRose = new GildedRose([ new Item('foo', 0, 1) ]);
    const items = gildedRose.updateQuality();
    const added = items[0]
    expect(added.sellIn).to.equal(-1);
    expect(added.quality).to.equal(0);
  });

  it('quality of Aged Brie goes up', () => {
    const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 1) ]);
    const items = gildedRose.updateQuality();
    const added =items[0]
    expect(added.quality).to.equal(2);
    expect(added.sellIn).to.equal(0);
  });

  it('quality should never go above 50', () => {
    const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 50) ]);
    const items = gildedRose.updateQuality();
    const added =items[0]
    expect(added.quality).to.equal(50);
    expect(added.sellIn).to.equal(0);
  });
  it('should allow quality of aged brie to be incremented up to 50', () => {
    const gildedRose = new GildedRose([ new Item('Aged Brie', -10, 10) ]);
    const items = gildedRose.updateQuality();
    const added =items[0]
    expect(added.quality).to.equal(12);
    expect(added.sellIn).to.equal(-11);
  });

  it('Conjured Mana Cake should start with quality being 10, by day 2 it should be 6 and by day 5 it should be decreased to zero', () => {
    const gildedRose = new GildedRose(data.data);
    let days: number = 20;
    if (process.argv.length > 2) {
      days = +process.argv[2];
    }

    for (let i = 0; i < days; i++) {
      data.data.forEach(element => {
        if (i===0){
          switch (element.name) {
            case 'Conjured Mana Cake': {
              console.log("-------- day " + i + " --------");
              console.log("name, sellIn, quality");
              console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
              expect(element.quality).to.equal(10);
              break;
            }
          }
        }
        if (i===2){
          switch (element.name) {
            case 'Conjured Mana Cake': {
              console.log("-------- day " + i + " --------");
              console.log("name, sellIn, quality");
              console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
              expect(element.quality).to.equal(6);
              break;
            }
          }
        }
        if (i===5){
          switch (element.name) {
            case 'Conjured Mana Cake': {
              console.log("-------- day " + i + " --------");
              console.log("name, sellIn, quality");
              console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
              expect(element.quality).to.equal(0);
              break;
            }
          }
        }
      });
      console.log();
      gildedRose.updateQuality();
    }
  });

});
