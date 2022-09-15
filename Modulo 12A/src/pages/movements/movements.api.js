import Axios from "axios";

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementList = id => Axios.get(url, { params: {accountId: id} }).then(({ data }) => data);

export const getAllMovements = () => Axios.get(url).then(({ data }) => data);

export const getAccountList = id => Axios.get(`${url}/${id}`).then(({ data }) => data);

