// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const ifechi = Asset.fromModule(require('./ifechi.webp')).uri;
const about = Asset.fromModule(require('./about.webp')).uri;
const hero = Asset.fromModule(require('./hero.webp')).uri;
const osborne = Asset.fromModule(require('./osborne.webp')).uri;
const about2 = Asset.fromModule(require('./about2.webp')).uri;

const ImageCollection = {
   ifechi,
   about,
   hero,
   osborne,
   about2,
}

export { ImageCollection };
