import { useEffect, useState } from 'react';
import getRandomUser from './functions/getRandomUser';
import styles from './App.module.css';
import Header from './components/header/Header';
import CardsToDisplay from './components/cardsToDisplay/CardsToDisplay';
import { DisplayedUser } from './types/displayedUser.types';

function App() {
  const [users, setUsers] = useState<DisplayedUser[]>([]);
  const [search, setSearch] = useState('');
  const [resultCount, setResultCount] = useState('10');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getRandomUser(resultCount).then(setUsers);
  }, [resultCount])

  return (
    <div className={styles.container}>
      <Header search={search} setSearch={setSearch} setFilter={setFilter} setResultCount={setResultCount} />
      <div className={styles.pageBody}>
        <CardsToDisplay search={search} filter={filter} users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}

export default App;
