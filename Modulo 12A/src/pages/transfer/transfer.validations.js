import { createFormValidation, Validators } from '@lemoncode/fonk';
import { dayValidator, monthValidator, yearValidator } from "./transfer.custom.validators";
import { iban } from '@lemoncode/fonk-iban-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const ValidationSchema = {
    field: {
        iban: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
        },
        {
            validator: iban.validator,
            message: 'Iban no válido',
        },
    ],
    
    name: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
    ],

    amount: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
    ],

    concept: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
    ],

    day: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
        {
            validator: dayValidator,
        }
    ],
    
    month: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
        {
            validator: monthValidator,
        }
    ],

    year: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
        {
            validator: yearValidator,
        }
    ],

    date: [
        {
        validator: laterDate.validator,
        customArgs: { parseStringToDateFn: value => new Date(value) ,date: new Date () },
        message: 'La fecha no es correcta',
        },
    ],

    email: [
        {
        validator: Validators.required,
        message: 'Email no válido',
        }
    ],
 },
}

export const formValidation = createFormValidation(ValidationSchema);