import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');