import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    description: [Validators.required],
    picture: [Validators.required],
    status: [Validators.required],
    bestSentences: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
