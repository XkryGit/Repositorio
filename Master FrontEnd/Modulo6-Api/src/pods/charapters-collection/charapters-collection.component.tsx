import * as React from 'react';
import Button from '@material-ui/core/Button';
import { charapterEntityVm } from './charapters-collection.vm';
import { CharapterCard } from './components/charapter-card.component';
import * as classes from './charapters-collection.styles';

interface Props {
  charapterCollection: charapterEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharapterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { charapterCollection: charapterCollection, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {charapterCollection.map((charapter) => (
          <li key={charapter.id}>
            <CharapterCard
              charapter={charapter}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
