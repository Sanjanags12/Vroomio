import config from 'react-native-config';
 
// get base url from the env files
const BASE_URL = config.BASE_URL;
 
// all the api endpoints used in the app
export const Endpoints = {
  BUS_LIST: `${BASE_URL}/buses`,
  POST_BUS:`${BASE_URL}/bookings`,
};