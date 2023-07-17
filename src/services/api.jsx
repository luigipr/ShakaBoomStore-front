import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL

export function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export function signIn(body) {
    const promise = axios.post(`${BASE_URL}/entrar`, body);
    return promise;
  }
  
export function signUp(body) {
    const promise = axios.post(`${BASE_URL}/cadastro`, body);
  
    return promise;
  }