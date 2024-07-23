import axios from 'axios';

export const getUser = (data) => 
    axios
        .get('http://localhost:3305/users/user', { params: data })
        .then((res) => console.log('res: ', res?.data?.data))
        .catch((err) => console.log(err));
