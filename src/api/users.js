import axios from 'axios';

export const getUserInfo = (data) =>
    axios
        .get('http://localhost:3305/users/user', {params: data})
        .then((resp) => resp?.data?.data)
        .catch((err) => console.log(err));
