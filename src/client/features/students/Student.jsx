import { useState } from "react";
import { useDeleteStudentMutation, useEditStudentMutation } from "./studentSlice";

/** Allows user to read, update, and delete a student */
export default function Student({ student: student }) {
  const [editStudent] = useEditStudentMutation();
  const [deleteStudent] = useDeleteStudentMutation();

  const [description, setDescription] = useState(student.description);

  /** Updates the students' status */
  // const toggleStudent = async (e) => {
  //   const done = e.target.checked;
  //   editStudent({ ...student, done });
  // };

  /** Saves the student's description */
  const save = async (e) => {
    e.preventDefault();
    editStudent({ ...student, description });
  };

  /** Deletes the student */
  const onDelete = async (e) => {
    e.preventDefault();
    deleteStudent(student.id);
  };

  return (
    <li>
      <form onSubmit={save}>
        <input type="checkbox" checked={student.done} onChange={toggleStudent} />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button>Save</button>
        <button onClick={onDelete} aria-label="delete">
          🞪
        </button>
      </form>
    </li>
  );
}
