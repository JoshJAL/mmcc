import axios from 'axios';
import { User } from '../types/user.types';

export default async function getRandomUser(setUsers: (users: User[]) => void, numberOfResults: string) {
  const results = await axios.get(`https://randomuser.me/api/?results=${numberOfResults}`);
  let data = results.data.results;
  setUsers(data);
}