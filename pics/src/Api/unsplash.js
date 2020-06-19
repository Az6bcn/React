import axios from 'axios';

// code related to the configuration of axios for making an http request to a specific url

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID IM5Y8ZdiWZ6-pxpFpHM1joeKIjaehdPyrg_4rucZDCw',
  },
});
