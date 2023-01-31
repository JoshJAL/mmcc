import Card from '../card/Card';
import styles from '../../App.module.css';
import { useMemo } from 'react';
import { DisplayedUser } from '../../types/displayedUser.types';

interface CardsToDisplayProps {
  search: string;
  users: DisplayedUser[];
  filter: string;
  setUsers: React.Dispatch<React.SetStateAction<DisplayedUser[]>>;
}

export default function CardsToDisplay({ search, users, filter, setUsers }: CardsToDisplayProps) {
  const updateUser = (index: number) => (data: DisplayedUser) => {
    setUsers((prev) => {
      const temp = [...prev]
      temp[index] = data
      return temp
    })
  }

  let filteredUsers = useMemo(() => {
    return (
      search
        ? users
          .filter(
            (user: DisplayedUser) =>
              user.firstName.toLowerCase().includes(search.toLowerCase()) ||
              user.lastName.toLowerCase().includes(search.toLowerCase()) ||
              (user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase()).includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase()) ||
              user.phone.includes(search) ||
              user.city.toLowerCase().includes(search.toLowerCase()) ||
              user.country.toLowerCase().includes(search.toLowerCase()) ||
              user.state.toLowerCase().includes(search.toLowerCase()) ||
              user.timezoneDescription.toLowerCase().includes(search.toLowerCase()) ||
              user.timezoneOffset.toLowerCase().includes(search.toLowerCase()),
          )
        : filter
          ? users
            .sort((a: DisplayedUser, b: DisplayedUser) => {
              if (filter === 'first') {
                return a.firstName.localeCompare(b.firstName);
              } else if (filter === 'last') {
                return a.lastName.localeCompare(b.lastName);
              } else if (filter === 'city') {
                return a.city.localeCompare(b.city);
              } else if (filter === 'email') {
                return a.email.localeCompare(b.email);
              } else if (filter === 'state') {
                return a.state.localeCompare(b.state);
              } else if (filter === 'country') {
                return a.country.localeCompare(b.country);
              } else if (filter === 'timezone') {
                return a.timezoneOffset.localeCompare(b.timezoneOffset);
              } else if (filter === 'timezoneDescription') {
                return a.timezoneDescription.localeCompare(b.timezoneDescription);
              } else {
                return 0;
              }
            }) : users
    )
  }, [users, search, filter])

  return (
    <div className={styles.userList}>
      {filteredUsers.map((user: DisplayedUser, index: number) => (
        <Card key={user.uuid} user={user} updateUser={updateUser(index)} />
      ))}
    </div>
  )
}