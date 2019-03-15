import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com' ,
    headers: {
        Authorization: 'Client-ID 25c97a05a91ef7456df2bb9ad36c8f06e5fe71b63f79729b7b2ff37a1fbe3ffa'
      }
});