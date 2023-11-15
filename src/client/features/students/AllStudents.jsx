import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import NewStudent from "./NewStudent";
import Student from "./Student";
// import { useGetAllStudentsQuery } from "./studentSlice";

import "./AllStudents.less";

const student = [
  {
    id: 1,
    firstName: "Ted",
    lastName: "Williams",
    email: "ted.williams@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.5,
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.2,
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.7,
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Jones",
    email: "emily.jones@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.9,
  },
  {
    id: 5,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.0,
  },
  {
    id: 6,
    firstName: "Samantha",
    lastName: "Brown",
    email: "samantha.brown@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.8,
  },
  {
    id: 7,
    firstName: "Michael",
    lastName: "Davis",
    email: "michael.davis@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.6,
  },
  {
    id: 8,
    firstName: "Ella",
    lastName: "Miller",
    email: "ella.miller@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.1,
  },
  {
    id: 9,
    firstName: "David",
    lastName: "Taylor",
    email: "david.taylor@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.4,
  },
  {
    id: 10,
    firstName: "Sophia",
    lastName: "Wilson",
    email: "sophia.wilson@gmail.com",
    imgUrl: "https://th.bing.com/th/id/OIP.TpqSE-tsrMBbQurUw2Su-AHaHk?pid=ImgDet&rs=1",
    gpa: 3.3,
  },
];

export default function AllStudents() {
  const token = useSelector(selectToken);

  if (!token) {
    return <p>You must be logged in to see students.</p>;
  }

  return (
    <div className="students">
      <h1>Students</h1>
      <Student />
      <ul>
        {student.map((s) => (
          <Student key={s.id} student={s} />
        ))}
      </ul>
    </div>
  );
}
