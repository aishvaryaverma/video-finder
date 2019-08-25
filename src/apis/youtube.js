import axios from 'axios';

const KEY = 'AIzaSyDP6xrsIngWfhiqHZVUY53I903Syt9iqi0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})