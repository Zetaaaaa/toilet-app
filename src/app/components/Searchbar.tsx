import styles from "../styles/searchBar.module.css"
import { NextFont } from 'next/dist/compiled/@next/font';

interface SearchbarProps {
  font: NextFont;
  text: string
 
}


function Searchbar({font,text}: SearchbarProps ) {
  return (
    <div className={styles.searchBar}>
      <input
        className={`${styles.input} ${font.className}`}
        placeholder={text}
        type="text"
      />
    </div>
  );
}

export default Searchbar