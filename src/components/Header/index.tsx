import Link from "next/link";
import { Button } from "../ui/button";
import { AppSidebar } from "./Sidebar";
import { SidebarTrigger } from "../ui/sidebar";


const navLinks = [
  {
    name: "Explore",
    href: "/anki",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="hidden  items-center justify-between">
        <Link className="font-bold text-xl" href="/">
          Flash Cards
        </Link>
        <ul className="flex gap-4 ">
          {navLinks.map((nav, id) => (
            <li key={id} className="link">

              {
                id === 0 && (
                  <Button
                    variant="outline"
                    className="text-primary rounded-full"
                  >
                    <Link href={nav.href}>{nav.name}</Link>
                  </Button>
                ) || (
                  <Button
                    variant="link"
                  >
                    <Link href={nav.href}>{nav.name}</Link>
                  </Button>
                )
              }
            </li>
          ))}
        </ul>
        <div className="flex gap-0 sm:gap-4">
          <Button variant="link">
            <Link href="/login">Login </Link>
          </Button>
          <Button >
            <Link href="/signin">Sign Up</Link>
          </Button>
        </div>
      </nav>
      <div >
        <SidebarTrigger />
      </div>
    </header>
  );
}