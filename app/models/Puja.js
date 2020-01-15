import {isArray, isDefined} from '../utils/validator';
export default class Puja {
  constructor(
    id = null,
    name = '',
    description ='',
    about='',
    timeInHrs='',
    requiredThings=[],
    pujaType=null,
    cost=0,
    imageId='',
    languages=[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.about = about;
    this.timeInHrs = timeInHrs;
    this.requiredThings = requiredThings;
    this.pujaType = pujaType;
    this.cost = cost;
    this.imageId = imageId;
    this.languages = languages;
  }
  // Getters

  get localCost() {
    return `$ ${this.cost}`;
  }

  get imageUrl() {
    return this.imageId;
  }

  // Methods

  get languageString() {
    const languages = this.languages;
    return languages.map(lang => `${lang.name} `);
  }

  get defaultLanguageId() {
    return isDefined(this.languages) &&
      isArray(this.languages) &&
      this.languages.length > 0
      ? this.languages[0].id
      : null;
  }
}
