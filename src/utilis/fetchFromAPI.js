import axios from "axios";
import {apiKey} from './Config'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {

  //url: BASE_URL,
  params: {
    maxResults: '50',
    

  },
  headers: {
    'X-RapidAPI-Key': '78710cc8femshf8d9244caf2018ap19cff5jsnc6bd650e7e09',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data ;
}
