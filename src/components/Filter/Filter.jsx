import React from 'react'
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

function Filter({updateStatus , updateSpecies,updateGender, clearFilters}) {
  return (
    <div>
      <h4>Filters</h4>
      <Status updateStatus={updateStatus}/>
      <Species updateSpecies={updateSpecies}/>
      <Gender updateGender={updateGender}/>
      <button
        className="btn btn-primary mb-3"
        onClick={clearFilters} // Clear Filters butonuna bağlanıyor
      >
        Clear Filters
      </button>
    </div>
  )
}

export default Filter