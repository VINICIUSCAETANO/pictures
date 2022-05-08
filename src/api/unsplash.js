import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID ImZ6FQkII0CtazperPTEYK0Gv9w4QSd7RmyKnU_Frus',
    },
});