import * as React from 'react';
import { charapterEntityVm } from './charapters-collection.vm';
import { mapFromApiToVm } from './charapters-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { mockHotelCollection } from '../charapters/api/charapter.mock-data';

export const useCharapterCollection = () => {
  const [charapterCollection, setCharapterCollection] = React.useState<
    charapterEntityVm[]
  >([]);

  const loadCharapterCollection = () => {
    //fetch('../charapters/api/charapter.mock-data')  <-- Esto es el fetch de cuando no mockeaba la llamada a la API
    //.then((response) => response.json())
    //.then((data) =>
    setCharapterCollection(
      mapToCollection(mockHotelCollection, mapFromApiToVm)
    );
    //);
  };

  return { charapterCollection, loadCharapterCollection };
};
