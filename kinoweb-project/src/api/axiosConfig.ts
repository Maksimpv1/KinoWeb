import axios from "axios";

export const axiosApiConfig = axios.create({
    baseURL:"https://api.kinopoisk.dev",
    headers:{ 
        "X-API-KEY":"4R6C127-BH342F2-Q450QAD-ZHS8KW7", // 9F8HEBP-TGH4DHJ-PVXSMWE-WYW0BVE 4R6C127-BH342F2-Q450QAD-ZHS8KW7 Запасной W3FE7BR-MVE4Z9D-N8Z9HJ8-JKQSBSH
        'Content-Type': 'application/json', 
},
});