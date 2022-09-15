import { history } from '../../core/router';
import { mapAccountVmToApi} from './transfer.mapper';
import { onSetError, onSetFormErrors, onSubmitForm, onUpdateField } from "../../common/helpers";
import { formValidation } from './transfer.validations';
import { getAccountList } from '../account-list/account-list.api';
import { setAccountOptions } from './transfer.helpers';
import { insertTransfer } from './transfer.api';

transfer= {
    iban:'',
    name:'',
    amount:'',
    concept:'',
    notes:'',
    day:'',
    month:'',
    year:'',
    date:'',
    email:'',
};


const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
    getAccountList().then(accounts => {
        setAccountOptions(accounts, params.id);
        transfer = {...transfer, sourceAccount: params.id };
    })
} else { 
    getAccountList().then(accounts => {
        setAccountOptions(accounts);
        console.log(transfer);
        transfer = {...transfer, sourceAccount: '1' };
})
};

onUpdateField('select-account', event => { 
    const value = event.target.value;
    transfer = {...transfer, sourceAccount : value };
});

onUpdateField('iban', event => { 
    const value = event.target.value;
    transfer = {...transfer, iban : value };

    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => { 
    const value = event.target.value;
    transfer = {...transfer, name : value };

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => { 
    const value = parseInt(event.target.value);
    transfer = {...transfer, amount : value };

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('notes', event => { 
    const value = event.target.value;
    transfer = {...transfer, notes : value };

    formValidation.validateField('notes', transfer.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('concept', event => { 
    const value = event.target.value;
    transfer = {...transfer, concept : value };

    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});


onUpdateField('day', event => { 
    const value = event.target.value;
    transfer = {...transfer, day : value, date: `${transfer.year}-${transfer.month}-${value}`};

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });
});

onUpdateField('month', event => { 
    const value = event.target.value;
    transfer = {...transfer, month : value, date: `${transfer.year}-${value}-${transfer.day}`};

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
});

onUpdateField('year', event => { 
    const value = event.target.value;
    transfer = {...transfer, year : value, date: `${value}-${transfer.month}-${transfer.day}`};

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    });
});

onUpdateField('email', event => { 
    const value = event.target.value;
    transfer = {...transfer, email : value };

    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});


const onSave = () => {
    const apiTransfer = mapAccountVmToApi(transfer);
    return insertTransfer(apiTransfer);
};

onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transfer).then(result => {
        console.log(result);
        onSetFormErrors(result);
        if (result.succeeded) {
            onSave().then(() => {
                history.back();
                });
            }

    })
});

