import React from "react";

const Card = ({ character }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="card position-relative">
        {/**Badge: Status */}
        {(() => {
          if (character.status === "Dead") {
            return (
              <div className="position-absolute badge bg-danger" style={{ top: "10px", right: "10px", padding:"10px" }}>
                {character.status}
              </div>
            );
          } else if(character.status ==="Alive"){
            return(
              <div className="position-absolute badge bg-success" style={{top:"10px", right:"10px", padding:"10px"}}>
                {character.status}
              </div>
            )
          }else{
            return(
              <div className="position-absolute badge bg-secondary" style={{top:"10px", right:"10px", padding:"10px"}}>
                {character.status}
              </div>
            )
          }
        })()}
        
        {/**Character Image */}
        <img src={character.image} alt={character.name} className="card-img-top" />

        {/*Character Image */}
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.species}</p>
          <p className="card-text">{character.location?.name}</p>
          <p className="card-text position-absolute badge text-dark bg-light" style={{top:"10px", left:"10px", padding:"10px"}}>{character.gender}</p>
        </div>
      </div>
      
    </div>
    
  );
};

export default Card;
