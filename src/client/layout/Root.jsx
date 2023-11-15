// layout/Root.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AuthForm from "../features/auth/AuthForm";
import AllStudents from "../features/students/AllStudents";
import NewStudent from "../features/students/NewStudent";

export default function Root() {
  return (
    // Remove BrowserRouter from here
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/NewStudent" element={<NewStudent />} />
      </Routes>
    </div>
  );
}
