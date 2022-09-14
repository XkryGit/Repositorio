import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = () => Axios.get(url).then(({ data }) =>
data);


export const getAccountListMov = (id) => Axios.get(`${url}/${id}`).then(({ data }) => data);