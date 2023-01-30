import { useEffect, useState } from 'react';
import getRandomUser from './functions/getRandomUser';
import Card from './components/card/Card';
import styles from './App.module.css';
import { User } from './types/user.types';
import Header from './components/header/Header';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [resultCount, setResultCount] = useState('10');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getRandomUser(setUsers, resultCount);
  }, [resultCount])

  return (
    <div className={styles.container}>
      <Header search={search} setSearch={setSearch} setFilter={setFilter} setResultCount={setResultCount} />
      <div className={styles.pageBody}>
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
      </div>
    </div>
  );
}

export default App;
