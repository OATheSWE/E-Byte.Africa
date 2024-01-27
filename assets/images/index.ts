// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const ifechi = Asset.fromModule(require('./ifechi.jpg')).uri;
const about = Asset.fromModule(require('./about.png')).uri;
const ecommerce = Asset.fromModule(require('./ecommerce.png')).uri;
const hero = Asset.fromModule(require('./hero.png')).uri;
const landingpage = Asset.fromModule(require('./landingpage.png')).uri;
const osborne = Asset.fromModule(require('./osborne.jpeg')).uri;
const teaser = Asset.fromModule(require('./teaser.png')).uri;
const webapp = Asset.fromModule(require('./webapp.png')).uri;

const ImageCollection = {
   ifechi,
   about,
   ecommerce,
   hero,
   landingpage,
   osborne,
   teaser,
   webapp,
}

export { ImageCollection };
