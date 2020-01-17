import {Puja, Language} from '../models';

function convertPujas(pujas) {
  console.log('convertPujas', pujas);
  return pujas.map(puja => {
    const languages = convertPujaLanguages(puja.PujaLanguages);
    return new Puja(
      puja.id,
      puja.name,
      puja.description,
      puja.about,
      puja.timeInHrs,
      puja.requiredThings,
      puja.pujaType,
      puja.cost,
      puja.imageId,
      languages,
    );
  });
}

function convertPujaLanguages(languages) {
  return languages.map(language => {
    return new Language(language.LanguageId, language.Language.name);
  });
}

export {convertPujas};
