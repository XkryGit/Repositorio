import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharapter, charapter } from './charapter.vm';
import {
  mapCharapterFromApiToVm,
  mapCharapterFromVmToApi,
} from './charapter.mappers';
import { CharapterComponent } from './charapter.component';
import { mockHotelCollection } from '../charapters/api/charapter.mock-data';
import { linkRoutes } from 'core/router';

export const CharapterContainer: React.FunctionComponent = (props) => {
  const [charapter, setcharapter] = React.useState<charapter>(
    createEmptyCharapter()
  );

  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharapter = (id: number) => {
    //fetch('https://rickandmortyapi.com/api/character')
    //.then((response) => response.json())
    //.then((data) =>
    setcharapter(mapCharapterFromApiToVm(mockHotelCollection[id - 1]));
    //);
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharapter(id);
    }
  }, []);

  const handleSave = async (character: charapter) => {
    const apiCharapter = mapCharapterFromVmToApi(character);
    const success = await api.saveCharapter(apiCharapter);
    if (success) {
      console.log(apiCharapter);
      mockHotelCollection[id - 1].bestSentences = apiCharapter.bestSentences;
      history.push(linkRoutes.root);
    } else {
      alert('Error on save hotel');
    }
  };

  return <CharapterComponent charapter={charapter} onSave={handleSave} />;
};
