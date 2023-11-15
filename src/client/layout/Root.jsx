import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import "./Root.less";
import AuthForm from "../features/auth/AuthForm";

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        {/* <Outlet /> */}
        <AuthForm />
      </main>
    </>
  );
}
