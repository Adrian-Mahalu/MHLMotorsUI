// import { Brand } from '../models/car-models/brand';
// import { alphabet } from '../common/common-constants';

// export function getBrandsFirstLetterDictionary(brandsList: Brand[]): Map<string, Brand[]> {
//   let brandsDictionary = new Map<string, Brand[]>();

//   alphabet.forEach(letter => {
//     let brandsStartingWithLetterList: Brand[] = [];
//     brandsList.forEach(brand => {
//       if (brand.firstLetter == letter) {
//         brandsStartingWithLetterList.push(brand);
//       }
//     });
//     if (brandsStartingWithLetterList.length > 0) {
//       brandsDictionary.set(letter, brandsStartingWithLetterList);
//     }
//   });

//   return brandsDictionary;
// }

