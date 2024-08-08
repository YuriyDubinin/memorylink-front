import axios from 'axios';

export const getUserInfo = (data) =>
    axios
        .get('http://localhost:3305/users/user', {params: data})
        .then((resp) => resp?.data?.data)
        .catch((error) => {
            console.error(error.response.data);
        });

export const checkUser = (compositeKey) =>
    axios.get('http://localhost:3305/users/user/check', {params: {compositeKey}});

export const login = (compositeKey, password) =>
    axios.get('http://localhost:3305/users/user/login', {params: {compositeKey, password}});
