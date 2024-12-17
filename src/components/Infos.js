import React from "react";

function Infos({ formData, setFormData }) {
  return (
    <div className="info-container">
      <input
        type="text"
        placeholder="nationality"
        value={formData.nationality}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="enter profession"
        value={formData.profession}
        onChange={(e) =>
          setFormData({ ...formData, profession: e.target.value })
        }
      />
    </div>
  );
}

export default Infos;
