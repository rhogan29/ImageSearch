import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 93e8cd75e17630d7995b4df2bab4c5d98c6d5d07c40f08aa841dd214fb328a29'
    }
});


