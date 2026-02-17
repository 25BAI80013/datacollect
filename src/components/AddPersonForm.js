import React, { useState } from "react";

export default function AddPersonForm({ addPerson }) {
  const [type, setType] = useState("Person");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [extra, setExtra] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;
    addPerson(type, name, age, extra);
    setName("");
    setAge("");
    setExtra("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Person</option>
        <option>Student</option>
        <option>Teacher</option>
      </select>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      {(type === "Student" || type === "Teacher") && (
        <input
          type="text"
          placeholder={type === "Student" ? "Grade" : "Subject"}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          required
        />
      )}

      <button type="submit">Add {type}</button>
    </form>
  );
}
