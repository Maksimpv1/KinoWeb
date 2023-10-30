import axios from "axios";

export const axiosApiConfig = axios.create({
    baseURL:"https://api.kinopoisk.dev",
    headers:{ 
        "X-API-KEY":"W3FE7BR-MVE4Z9D-N8Z9HJ8-JKQSBSH", //4R6C127-BH342F2-Q450QAD-ZHS8KW7 Запасной
        'Content-Type': 'application/json', 
},
});