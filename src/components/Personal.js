import React from "react";

function Personal({ formData, setFormData }) {
  return (
    <div className="personal-container">
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <input
        type="age"
        placeholder="enter your age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
    </div>
  );
}

export default Personal;
