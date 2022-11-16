import { GildedRose } from '../app/gilded-rose';
let items = require('./mocha/testData.json');

const gildedRose = new GildedRose(items.data);

let days: number = 20;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.data.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
  });
  console.log();
  gildedRose.updateQuality();
}
