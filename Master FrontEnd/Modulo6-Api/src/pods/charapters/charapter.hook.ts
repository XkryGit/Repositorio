import * as React from 'react';
import { createEmptyCharapter, charapter } from './charapter.vm';
import {
  mapCharapterFromApiToVm,
  mapCharapterFromVmToApi,
} from './charapter.mappers';
import { mapToCollection } from 'common/mappers';
import { mockHotelCollection } from '../charapters/api/charapter.mock-data';
import { mapFromApiToVm } from 'pods/charapters-collection/charapters-collection.mapper';

export const useCharapterCollection = () => {
  const [charapterCollection, setCharapterCollection] = React.useState<
    charapter[]
  >([]);

  const loadHotelCollection = () => {
    //fetch('https://rickandmortyapi.com/api/character')
    //.then((response) => response.json())
    //.then((data) =>
    setCharapterCollection(
      mapToCollection(mockHotelCollection, mapFromApiToVm)
    );
    //);
  };

  return { charapterCollection, loadHotelCollection };
};
