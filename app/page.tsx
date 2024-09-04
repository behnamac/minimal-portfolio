import Image from "next/image";
import { Hero } from "../components/Hero";
import { FloatingNav } from "@/components/Navbar/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid/Grid";

export default function Home() {
  const NavbarItems = [{ name: "Home", link: "/", icon: <FaHome /> }];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav className="" navItems={NavbarItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
