import axios from "axios";

const typicode_instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    
  });

 
  export default typicode_instance;