import Axios from "axios";

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes?`;

export const getSaleTypeList = () =>
Axios.get(saleTypeListUrl).then(data => data.data)


const equipamentListUrl = `${process.env.BASE_API_URL}/equipments?`;

export const getequipamentList = () =>
Axios.get(equipamentListUrl).then(data => data.data)


const provincesListUrl = `${process.env.BASE_API_URL}/provinces?`;

export const getprovincesList = () =>
Axios.get(provincesListUrl).then(data => data.data)


const propertiesListUrl = `${process.env.BASE_API_URL}/properties?`;

export const getpropertiesList = () =>
Axios.get(propertiesListUrl).then(data => data.data)


export const saveProperty = newProperty => Axios.post(propertiesListUrl, newProperty).then(({ data }) => data);