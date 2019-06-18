console.log('test');
// Read Synchrously
import * as fs from 'fs';
import * as path from 'path';

console.log("\n *START* \n");
const rootDir = process.cwd();

const version = '9.12.1';
const locale = 'en_US';

const dataDir = rootDir + '/lol-data-tar/dragontail-'+version+'/'+version+'/data/'+locale;


interface RawChampionListData {
  type: string,
  format: string,
  version: string,
  data: Record<string, any>
}

const champListContentPath = dataDir+'/champion.json';
const champFullContentPath = dataDir+'/championFull.json';

const champfileContent = fs.readFileSync(champFullContentPath);
const fullChampJson: RawChampionListData = JSON.parse(champfileContent.toString());

//keys to delete
const keysToDelete = ['lore', 'skins', 'blurb', 'allytips', 'enemytips', 'info', 'recommended'];

// champion data
const championArr = [];
Object.keys(fullChampJson.data).forEach((champKey) => {
  console.log(champKey);
  // use _id instead of id for mongo
  fullChampJson.data[champKey]._id=fullChampJson.data[champKey].id;
  delete fullChampJson.data[champKey].id;

  // delete unused data from 'full' champion data
  keysToDelete.forEach(keyToDelete => {
    delete fullChampJson.data[champKey][keyToDelete];
  });

  championArr.push(fullChampJson.data[champKey]);
});
fs.writeFileSync(path.join(__dirname, 'championArr.json'), JSON.stringify(championArr));
// console.log(fullChampJson.data['Amumu']);

// TODO: item data
const itemArr = [];



console.log("\n *EXIT* \n");
