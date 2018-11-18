import axios from 'axios';

export const API = axios.create({
    baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    //Set APPID on each request
    config.params.APPID = 'a46fa070f65ad4c5ee937bb51052158f';
    config.params.units = 'imperial';
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});