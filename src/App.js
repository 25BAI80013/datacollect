import React, { useState } from "react";
import PersonCard from "./components/PersonCard";
import AddPersonForm from "./components/AddPersonForm";
import "./App.css";

// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.role = "Person";
  }
  getDetails() {
    return `${this.name}, Age: ${this.age}`;
  }
}

// Subclass Student
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
    this.role = "Student";
  }
  getDetails() {
    return `${super.getDetails()}, Grade: ${this.grade}`;
  }
}

// Subclass Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
    this.role = "Teacher";
  }
  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

export default function App() {
  const [people, setPeople] = useState([
    new Student("Alice", 20, "A"),
    new Teacher("Mr. Smith", 40, "Math"),
    new Person("John Doe", 30)
  ]);

  const addPerson = (type, name, age, extra) => {
    let newPerson;
    if (type === "Student") newPerson = new Student(name, age, extra);
    else if (type === "Teacher") newPerson = new Teacher(name, age, extra);
    else newPerson = new Person(name, age);

    setPeople([newPerson, ...people]);
  };

  const removePerson = (id) => {
    setPeople(people.filter((p, index) => index !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Add Identity</h1>
      </header>

      <AddPersonForm addPerson={addPerson} />

      <div className="card-grid">
        {people.map((p, index) => (
          <PersonCard 
            key={index} 
            person={p} 
            onRemove={() => removePerson(index)} 
          />
        ))}
      </div>
    </div>
  );
}
