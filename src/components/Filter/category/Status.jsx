import React from "react";

function Status({ updateStatus, selectedStatus }) {
  const statusList = ["Alive", "Dead", "Unknown"];

  const handleStatusChange = (event) => {
    updateStatus(event.target.value); // Seçilen durumu App bileşenine gönderir
  };

  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={handleStatusChange} // Seçim değiştiğinde çalışır
        value={selectedStatus || ""} // Eğer selectedStatus boşsa varsayılan olarak "" olacak
      >
        <option value="" disabled>
          Status
        </option>
        {statusList.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Status;
