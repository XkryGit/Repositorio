import { charapterEntityApi } from './charapters-collection.api-model';
import { mockCharaptersCollection } from './charapters-collection.mock-data';

let CharaptersCollection = [...mockCharaptersCollection];

export const getCharapterCollection = async (): Promise<
  charapterEntityApi[]
> => {
  return CharaptersCollection;
};

export const deleteCharapter = async (id: string): Promise<boolean> => {
  CharaptersCollection = CharaptersCollection.filter((h) => h.id !== id);
  return true;
};
