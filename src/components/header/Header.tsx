import CategoryFilterDropdown from '../categoryFilterDropdown/CategoryFilterDropdown'
import NumberOfResultsDropdown from '../numberOfResultsDropdown/NumberOfResultsDropdown'
import SearchBar from '../searchBar/SearchBar'
import styles from './Header.module.css'

interface HeaderProps {
  search: string;
  setSearch: (search: string) => void;
  setResultCount: (resultCount: string) => void;
  setFilter: (filter: string) => void;
}

function Header({ search, setSearch, setResultCount, setFilter }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContentContainer}>
        <img src="https://madmobile.com/wp-content/uploads/2021/08/mm-logo.png" alt='Mad Mobile Logo' />
        <SearchBar search={search} setSearch={setSearch} />
        <div className={styles.dropdownFilter}>
          <h4>Select Number of Users:</h4>
          <NumberOfResultsDropdown setResultCount={setResultCount} />
        </div>
        <div className={styles.dropdownFilter}>
          <h4>Filter Alphabetically By:</h4>
          <CategoryFilterDropdown setFilter={setFilter} />
        </div>
      </div>
    </header>
  )
}

export default Header
