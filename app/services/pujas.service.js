import {getAllPujas as fetchAll} from '../apis';
import {convertPujas} from '../utils/converters';

export class PujaService {
  static availablePujas = [];
  static async getAllPujas() {
    if (this.availablePujas.length === 0) {
      var x = new Date().getTime();
      let pujas = await fetchAll();
      var y = new Date().getTime();
      console.log('API Time', y - x);
      this.availablePujas = convertPujas(pujas.data);

      var z = new Date().getTime();

      console.log('convertion time', z - y);
    }
    return this.availablePujas;
  }
}

// // returns all pujas with modal object
// async function getAllPujas() {
//   const pujas = await fetchAll();
//   return convertPujas(pujas.data);
// }

// export {getAllPujas};
