import React from "react";
import styles from "./Search.module.scss";

function Search({ setSearch, updatePageNumber }) {
  const handleSearch = (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  };

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1); // Sayfa numarasını sıfırlar
          setSearch(e.target.value); // Arama terimini güncelle
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        onClick={handleSearch} 
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
