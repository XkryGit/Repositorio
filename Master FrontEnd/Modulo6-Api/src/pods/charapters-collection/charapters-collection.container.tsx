import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharapter } from './api';
import { useCharapterCollection } from './charapters-collection.hook';
import { CharapterCollectionComponent } from './charapters-collection.component';

export const CharapterCollectionContainer = () => {
  const { charapterCollection, loadCharapterCollection } =
    useCharapterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharapterCollection();
  }, []);

  const handleCreateHotel = () => {
    history.push(linkRoutes.createHotel);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: string) => {
    alert('Delete');
    await deleteCharapter(id);
    loadCharapterCollection();
  };

  return (
    <CharapterCollectionComponent
      charapterCollection={charapterCollection}
      onCreateHotel={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
