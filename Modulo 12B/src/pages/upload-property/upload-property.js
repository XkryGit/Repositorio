import { setCheckboxList, setOptionList, onAddFeature, formatDeleteFeatureButtonId, onRemoveFeature, onAddImage} from "./upload-property.helpers";
import { getSaleTypeList, getequipamentList, getprovincesList, getpropertiesList, saveProperty } from "./upload-property.api";
import { onUpdateField, onSubmitForm, onSetFormErrors, onAddFile } from '../../common/helpers';
import { newPropertyValidation } from "./upload-property.validations";
import { mapPropertyVMtoApi } from "./upload-property.mapper";

//----------------------//

let newProperty = {
    id:'',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms:'',
    locationUrl: '',
    mainFeatures: [],
    equipments: [],
    images: [],
}
//-----------------------//
let newFeature = "";
//----------------------//

Promise.all ([getSaleTypeList(), getequipamentList(), getprovincesList(), getpropertiesList()]).then(
([saleTypeList, equipamentList, getprovincesList, properties]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setCheckboxList(equipamentList, 'equipments');
    setOptionList(getprovincesList, 'province');
    newProperty.id = (properties.length + 1 + '');
    }
);

//----------------------//

onUpdateField("title", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, title: value};
});

onUpdateField("notes", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, notes: value};
});

onUpdateField("email", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, email: value};
});

onUpdateField("phone", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, phone: value};
});

onUpdateField("price", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, price: value};
});

onUpdateField("saleTypes", event =>{
    const value = event.target.value;
    
    if (event.target.checked === true) {
        newProperty.saleTypes[value]= value;
    } else {
        newProperty.saleTypes[value]= null;
    }

    const validNumbers = newProperty.saleTypes.filter(Number)
    newProperty.saleTypes= validNumbers;
    });

onUpdateField("address", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, address: value};
});

onUpdateField("city", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, city: value};
});

onUpdateField("province", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, province: value};
});

onUpdateField("squareMeter", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, squareMeter: value};
});

onUpdateField("rooms", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, rooms: value};
});

onUpdateField("bathrooms", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, bathrooms: value};
});

onUpdateField("locationUrl", event =>{
    const value = event.target.value;
    newProperty = { ...newProperty, locationUrl: value};
});

onUpdateField("newFeature", event =>{ 
    newFeature = event.target.value;
});

onUpdateField("equipments", event =>{
    const value = event.target.value;
    
    if (event.target.checked === true) {
        newProperty.equipments[value-1]= value;
    } else {
        newProperty.equipments[value-1]= null;
    }
    const arr = newProperty.equipments;
    const validNumbers = arr.filter(Number);
    newProperty.equipments = validNumbers;
});

onAddFile("add-image", value => {
onAddImage(value);
newProperty.images.push(value);
});

//----------------------//

onSubmitForm("insert-feature-button", () => {
    onAddFeature(newFeature);
    const removeButton = formatDeleteFeatureButtonId(newFeature);

onSubmitForm(removeButton, () => {
    onRemoveFeature(newFeature)
})
    newProperty.mainFeatures.push(newFeature)
});

onSubmitForm('save-button', () => {
    newPropertyValidation.validateForm(newProperty).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            saveProperty(mapPropertyVMtoApi(newProperty))
            window.alert("Propiedad subida con éxito");
        };
    });   
});


