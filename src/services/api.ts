import axios from 'axios';

export default {
  user: {
    getAll: (url: string) => axios.get(`${url}/users`).then(res => res.data),
    get: (url: string, id: number) =>
      axios.get(`${url}/users/${id}`).then(res => res.data)
  }
};
