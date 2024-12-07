import React, { useState, useEffect } from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";

function App() {
  const [fetchedData, updateFetchedData] = useState({});
  const [pageNumber, setPageNumber] = useState(1); // Sayfa numarasını state olarak tutuyoruz
  const [search, setSearch]=useState("");
  const { info, results } = fetchedData;

  // API'den veri çekme işlemi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
        );
        const data = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, [pageNumber, search]); // search bağımlılık olarak eklendi
  

  const updatePageNumber = (newPageNumber) => {
    setPageNumber(newPageNumber); // Sayfa numarasını güncelleme fonksiyonu
  };
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
  
      <div className="container">
        <div className="row">
          {/* Filter Component */}
          <div className="col-lg-2 col-12 mb-3">
            <Filter />
          </div>
  
          {/* Cards */}
          <div className="col-lg-10 col-12">
            <div className="row">
              {results &&
                results.map((character) => (
                  <Card key={character.id} character={character} />
                ))}
            </div>
          </div>
        </div>
      </div>
  
      <Pagination
        pageNumber={pageNumber}
        info={info}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
}  

export default App;
