import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";
import style from "./MainLayout.module.scss";
import { Footer } from "../components/footer/footer";

export function MainLayout() {
  const links = [
    { name: "home", path: "/" },
    { name: "plakater", path: "/poster" },
    { name: "about", path: "/about" },
    { name: "kontact", path: "/contact" },
    { name: "login", path: "/login" },
  ];

  return (
    <section className={style.pageContainer}>
      <Navbar logoNav="WALLYWOOD" linksNav={links} />
      <Outlet />
      <Footer />
    </section>
  );
}
