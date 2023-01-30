import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <input autoFocus type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}