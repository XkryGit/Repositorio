import { Charapter } from './charapter.api-model';
import { mockHotelCollection } from './charapter.mock-data';

export const getCharapter = async (id: string): Promise<Charapter> => {
  return mockHotelCollection.find((h) => h.id === id);
};

export const saveCharapter = async (charapter: Charapter): Promise<boolean> => {
  return true;
};
