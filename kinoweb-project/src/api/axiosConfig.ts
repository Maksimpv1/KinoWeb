import axios from "axios";

export const axiosApiConfig = axios.create({
    baseURL:"https://api.kinopoisk.dev",
    headers:{ 
        "X-API-KEY":"W3FE7BR-MVE4Z9D-N8Z9HJ8-JKQSBSH",
        'Content-Type': 'application/json', 
},
});