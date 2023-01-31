import { User } from '../../types/user.types';
import Card from '../card/Card';
import styles from '../../App.module.css';

interface CardsToDisplayProps {
  search: string;
  users: User[];
  filter: string;
}

export default function CardsToDisplay({ search, users, filter }: CardsToDisplayProps) {
  return (
    <div className={styles.userList}>
      {search ?
        users.filter((user: User) =>
          (user.name.first.toLowerCase().includes(search.toLowerCase())) ||
          (user.name.last.toLowerCase().includes(search.toLowerCase())) ||
          (user.name.first.toLowerCase() + ' ' + user.name.last.toLowerCase()).includes(search.toLowerCase()) ||
          (user.email.toLowerCase().includes(search.toLowerCase())) ||
          (user.cell.includes(search)) ||
          (user.location.city.toLowerCase().includes(search.toLowerCase())) ||
          (user.location.country.toLowerCase().includes(search.toLowerCase())) ||
          (user.location.state.toLowerCase().includes(search.toLowerCase())) ||
          (user.location.timezone.description.toLowerCase().includes(search.toLowerCase())) ||
          (user.location.timezone.offset.toLowerCase().includes(search.toLowerCase()))
        ).map(
          (user: User) =>
            (<Card key={user.login.uuid} user={user} />)
        )
        : filter ?
          users.sort((a: User, b: User) => {
            if (filter === 'first') {
              return a.name.first.localeCompare(b.name.first);
            } else if (filter === 'last') {
              return a.name.last.localeCompare(b.name.last);
            } else if (filter === 'city') {
              return a.location.city.localeCompare(b.location.city);
            } else if (filter === 'email') {
              return a.email.localeCompare(b.email);
            } else if (filter === 'state') {
              return a.location.state.localeCompare(b.location.state);
            } else if (filter === 'country') {
              return a.location.country.localeCompare(b.location.country);
            } else if (filter === 'timezone') {
              return a.location.timezone.offset.localeCompare(b.location.timezone.offset);
            } else if (filter === 'timezoneDescription') {
              return a.location.timezone.description.localeCompare(b.location.timezone.description);
            } else {
              return 0;
            }
          }).map((user: User) => (
            <Card key={user.login.uuid} user={user} />
          ))
          :
          users.map((user: User) => (
            <Card key={user.login.uuid} user={user} />
          ))
      }
    </div>
  )
}