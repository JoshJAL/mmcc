import axios from 'axios';
import { DisplayedUser } from '../types/displayedUser.types';


export default async function getRandomUser(numberOfResults: string) {
  const results = await axios.get(`https://randomuser.me/api/?results=${numberOfResults}`);
  let data = results.data.results;
  return data.map((user: any) => {
    const displayedUser: DisplayedUser = {
      uuid: user.login.uuid,
      picture: user.picture.large,
      firstName: user.name.first,
      lastName: user.name.last,
      email: user.email,
      phone: user.phone,
      country: user.location.country,
      city: user.location.city,
      state: user.location.state,
      timezoneDescription: user.location.timezone.description,
      timezoneOffset: user.location.timezone.offset
    }
    return displayedUser;
  })
}