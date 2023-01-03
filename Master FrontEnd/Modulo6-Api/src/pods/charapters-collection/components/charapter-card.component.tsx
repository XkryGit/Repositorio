import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { charapterEntityVm } from '../charapters-collection.vm';
import * as classes from './charapter-card.styles';

interface Props {
  charapter: charapterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharapterCard: React.FunctionComponent<Props> = (props) => {
  const { charapter: charapter, onEdit, onDelete } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Charapter"></Avatar>}
        title={charapter.name}
        subheader={charapter.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={charapter.picture}
            title={charapter.name}
            style={{ height: 0, paddingTop: '100%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {charapter.description}
            <br />
            {'Phrases: ' + charapter.bestSentences}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(charapter.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(charapter.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
