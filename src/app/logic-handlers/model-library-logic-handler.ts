import { alphabetAndSingleDigits } from '../common/common-constants';
import { Model } from '../models/car-models/model';

export function getModelsFirstCharacterDictionary(modelsList: Model[]): Map<string, Model[]> {
  let modelsDictionary = new Map<string, Model[]>();

  alphabetAndSingleDigits.forEach(character => {
    let modelsStartingWithLetterList: Model[] = [];
    modelsList.forEach(model => {
      if (model.firstCharacter == character) {
        modelsStartingWithLetterList.push(model);
      }
    });
    if (modelsStartingWithLetterList.length > 0) {
      modelsDictionary.set(character, modelsStartingWithLetterList);
    }
  });

  return modelsDictionary;
}

