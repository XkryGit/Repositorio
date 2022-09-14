import { getDetailProperty, saveform, getEquipamentList } from "./property-detail.api.js";
import { mapPropertyApiToVm } from "./property-detail.mappers";
import { setPropertyValues } from "./property-detail.helpers";
import { onUpdateField, onSubmitForm, onSetFormErrors } from '../../common/helpers';
import { formValidation } from "./property-detail.validation";

Promise.all ([getEquipamentList()]).then(
    ([equipamentList]) => {
        getDetailProperty().then(data => mapPropertyApiToVm(data, equipamentList)).then(property => setPropertyValues(property[0]))
        }
    );


let form = {
    email: '',
    message: '',
};

onUpdateField('email', event =>{
    const value = event.target.value;
    form = { ...form, email: value};
});

onUpdateField('message', event =>{
    const value = event.target.value;
    form = { ...form, message: value};
});

function confirmed() {
    document.getElementById('email').value="";
    document.getElementById('message').value="";
    alert("Mensaje enviado correctamente")
}

onSubmitForm('contact-button', () => {
    formValidation.validateForm(form).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            saveform(form).then(confirmed())
        };
    });
});
 