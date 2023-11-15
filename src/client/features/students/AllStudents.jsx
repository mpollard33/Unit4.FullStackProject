import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewStudent from "./NewStudent";
import Student from "./Student";
import { useGetAllStudentsQuery } from "./studentSlice";

import "./AllStudents.less";

/** Main interface for user to interact with their tasks */
export default function AllStudents() {
  const token = useSelector(selectToken);
  const { data: student, isLoading } = useGetAllStudentsQuery();

  if (!token) {
    return <p>You must be logged in to see students.</p>;
  }

  return (
    <div className="students">
      <h1>Students</h1>
      <h2>Add New Student</h2>
      <NewStudent />
      <h2>Your Students?</h2>
      {isLoading && <p>Loading students...</p>}
      {students && (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}
