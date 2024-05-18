import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl p-4">
        <Outlet />
      </div>
    </>
  );
};
