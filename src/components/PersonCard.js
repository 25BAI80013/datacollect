import React from "react";

export default function PersonCard({ person, onRemove }) {
  return (
    <div className={`person-card ${person.role.toLowerCase()}`}>
      <h3>{person.name}</h3>
      <p><strong>Role:</strong> {person.role}</p>
      <p>{person.getDetails()}</p>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
}
