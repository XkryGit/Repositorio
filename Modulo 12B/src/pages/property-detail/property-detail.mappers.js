import { getEquipamentList } from "./property-detail.api.js";

export const mapPropertyApiToVm = (propertyList, equipamentList) =>
    Array.isArray(propertyList) ? propertyList.map(property => mapProperty(property, equipamentList)): [];


const mapProperty = (property, equipamentList) => ({
    id: property.id,
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    title: property.title,
    city: property.city,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    price: `${property.price.toLocaleString()} €`,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    saleTypesIds: property.saleTypeIds,
    address: property.address,
    provinceId: property.provinceId,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: getEquipamentWords(property.equipmentIds, equipamentList),
    images: property.images,
    });



    
const getRoomWord = rooms =>{
    return rooms > 1 ? 'habitaciones' : 'habitación';
};
    
const getBathroomWord = bathrooms => {
    return bathrooms > 1 ? 'baños' : 'baño';
};


const getEquipamentWords = (equipmentIds, equipamentList) => equipmentIds.map(id => comparerEquipmentsApi(id, equipamentList).name);


function comparerEquipmentsApi(id, equipmentsIds) {
    return equipmentsIds.find(Element => Element.id === id)
}