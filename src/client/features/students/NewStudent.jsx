import React from "react";
import { useState } from "react";
import { useCreateStudentMutation } from "./studentSlice";

/** Form for creating new students */
export default function NewStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [gpa, setGpa] = useState(0);

  const [createStudent] = useCreateStudentMutation();

  // Event Handlers: update useState with student data
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleImgUrlChange = (e) => {
    setImgUrl(e.target.value);
  };
  const handleGpaChange = (e) => {
    setGpa(e.target.value);
  };

  const create = async (e) => {
    e.preventDefault();
    createStudent({ firstName, lastName, email, imgUrl, gpa });
  };

  return (
    <form onSubmit={create}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={imgUrl}
          onChange={handleImgUrlChange}
          required
        />
      </label>
      <label>
        GPA:{" "}
        <input type="text" value={gpa} onChange={handleGpaChange} required />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}
