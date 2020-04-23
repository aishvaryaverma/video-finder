import axios from 'axios';

// const KEY = 'AIzaSyDFKG5WrRKfrn8sgEDMtckxueyiMXZdiTQ';
const KEY = 'AIzaSyCfewCBsh_vrqLXTG0g12p2uo7ccEzRrtA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
