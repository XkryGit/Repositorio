import Axios from 'axios';


const propertyListUrl = `${process.env.BASE_API_URL}/properties` + window.location.search;



export const getDetailProperty = () => Axios.get((propertyListUrl))
    .then(response => response.data)
    .then(data => data)



const url = `${process.env.BASE_API_URL}/coments`;

export const saveform = form => Axios.post(url, form).then(({ data }) => data);



const equipamentListUrl = `${process.env.BASE_API_URL}/equipments?`;

export const getEquipamentList = () =>
Axios.get(equipamentListUrl).then(data => data.data)