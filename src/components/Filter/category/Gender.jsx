import React from "react";

function Gender({ updateGender,selectedGender }) {
  const genderList = ["Male", "Female", "Genderless", "Unknown"];

  const handleGenderChange = (event) => {
    updateGender(event.target.value); // Seçilen cinsiyeti App bileşenine gönder
  };

  return (
    <div className="mb-3">
      <select className="form-select" onChange={handleGenderChange}  value={selectedGender || ""}>
        <option value=""  disabled>Gender</option> {/* Tüm cinsiyetler */}
        {genderList.map((gender, index) => (
          <option key={index} value={gender}>
            {gender}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Gender;
