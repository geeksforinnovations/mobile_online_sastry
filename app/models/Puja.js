export default class Puja {
  constructor(
    id = null,
    name = '',
    description,
    about,
    timeInHrs,
    requiredThings,
    pujaType,
    cost,
    imageId,
    languages,
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

  getLanguageString() {
    const languages = this.languages;
    return languages.map(lang => `${lang.name} `);
  }
}
