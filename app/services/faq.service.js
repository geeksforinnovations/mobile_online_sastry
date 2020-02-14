import {getAllFAQs as getAll} from '../apis';

export class FAQService {
  static availableFAQs = [];
  static async getAllFAQs() {
    if (this.availableFAQs.length === 0) {
      let faqs = await getAll();
      this.availableFAQs = faqs.data;
    }
    return this.availableFAQs;
  }
}
