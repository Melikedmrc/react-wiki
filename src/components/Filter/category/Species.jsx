import React from "react";

function Species({ updateSpecies,selectedSpecies }) {
  const speciesList = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const handleSpeciesChange = (event) => {
    updateSpecies(event.target.value); // Seçilen türü App bileşenine gönder
  };

  return (
    <div className="mb-3">
      <select className="form-select" onChange={handleSpeciesChange}  value={selectedSpecies || ""} >
        <option value="" disabled>Species</option> {/* Tüm türler */}
        {speciesList.map((species, index) => (
          <option key={index} value={species}>
            {species}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Species;
