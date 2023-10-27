import axios from "axios";

export const axiosApiConfig = axios.create({
    baseURL:"https://api.kinopoisk.dev",
    headers:{ 
        "X-API-KEY":"4R6C127-BH342F2-Q450QAD-ZHS8KW7",
        'Content-Type': 'application/json', 
},
});