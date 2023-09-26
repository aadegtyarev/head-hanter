import { axios } from "axios";

export default function useInstance() {

    const API_URL = 'http://localhost:8081/api';
    let token = ""
    if ($cookies.get("head-hunter")) {
        token = $cookies.get("head-hunter").token
    }

    const instance = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });


    return {
        instance
    };
}
