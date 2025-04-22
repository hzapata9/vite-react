/* fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json)); */

  export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return response.json();
        //.then((response) => response.json())
        //.then((json) => console.log(json));
  }

import axios from 'axios';

  export const getPostsWithAxios = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2')
    return response.data;
}