import { Validators, createFormValidation } from "@lemoncode/fonk";
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';


const validationSchema = {
    field: {
        title: [Validators.required],
        notes: [Validators.required],
        email: [Validators.required, Validators.email],
        phone: [
            {
              validator: Validators.pattern,
              customArgs: { pattern: '^(6|7|8|9)\\d{8}$' },
            },
          ],
        price: [Validators.required, isNumber.validator],
        saleTypes: [Validators.required],
        address: [Validators.required ],
        city: [Validators.required],
        province: [Validators.required],
        squareMeter: [Validators.required],
        rooms: [Validators.required, isNumber.validator],
        bathrooms: [Validators.required, isNumber.validator],
        locationUrl: [Validators.required, isUrl.validator],
        mainFeatures: [Validators.required],
    },
};

export const newPropertyValidation = createFormValidation(validationSchema);