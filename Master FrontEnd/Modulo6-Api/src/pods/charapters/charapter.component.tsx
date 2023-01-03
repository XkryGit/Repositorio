import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './charapter.validations';
import { charapter } from './charapter.vm';
import * as classes from './charapter.styles';
import { Lookup } from 'common/models';

interface Props {
  charapter: charapter;
  onSave: (charapter: charapter) => void;
}

export const CharapterComponent: React.FunctionComponent<Props> = (props) => {
  const { charapter: charapter, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={charapter}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent
            name="description"
            label="Description"
            rows={3}
            rowsMax={5}
          />
          <TextFieldComponent
            name="bestSentences"
            label="Phrases"
            multiline={true}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
