import { useEffect, useState } from 'react';
import getRandomUser from './functions/getRandomUser';
import styles from './App.module.css';
import { User } from './types/user.types';
import Header from './components/header/Header';
import CardsToDisplay from './components/cardsToDisplay/CardsToDisplay';

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
        <CardsToDisplay search={search} filter={filter} users={users} />
      </div>
    </div>
  );
}

export default App;
