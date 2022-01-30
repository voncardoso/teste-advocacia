import axios from 'axios'
import exp from 'constants';

export const api = axios.create({
    baseURL: 'https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores'
});


