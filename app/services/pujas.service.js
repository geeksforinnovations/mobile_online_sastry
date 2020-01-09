import {getAllPujas as fetchAll} from '../apis';
import {convertPujas} from '../utils/converters';

// returns all pujas with modal object
async function getAllPujas() {
  const pujas = await fetchAll();
  return convertPujas(pujas.data);
}

export {getAllPujas};
