import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/todos/1'

export const api = axios.create({
  baseURL,
  timeout: 1000,
});