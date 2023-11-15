import React from "react";
import { useDeleteStudentMutation } from "./studentSlice";

export default function Student({ student }) {
  if (!student) {
    return <div>Error: Student data missing</div>;
  }
  const [deleteStudent] = useDeleteStudentMutation();

  const onDelete = async (e) => {
    e.preventDefault();
    deleteStudent(student.id);
  };

  console.log("Student Data:", student);

  return (
    <li>
      <div>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <img src={student.imgUrl} />
        <p>GPA: {parseFloat(student.gpa)}</p>
        {/* <p>First Name: {student.firstName}</p>
        <p>Last Name: {student.lastName}</p> */}
        <p>Email: {student.email}</p>
      </div>
      <div>
        <button onClick={onDelete}>🞪</button>
      </div>
    </li>
  );
}
