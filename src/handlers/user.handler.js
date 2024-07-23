import axios from 'axios';

export const getUser = () =>
    axios
        .get('http://localhost:8080/users/32dsa87as8c7sd87v7df8v7df8v7d8f7v8')
        .then((res) => console.log('res: ', res?.data))
        .catch((err) => console.log(err));
