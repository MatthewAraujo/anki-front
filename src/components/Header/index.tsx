import Link from "next/link";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { isUserAuthenticated } from "@/utils/auth";
export const navLinks = [
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
  const loggedIn = isUserAuthenticated();
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="  flex items-center justify-between">
        <Link className="font-bold text-xl" href="/">
          Flash Cards
        </Link>
        <ul className="hidden sm:flex gap-4 ">
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
        <div className="hidden  sm:flex gap-0 sm:gap-4">
          {
            loggedIn ? (
              <>
                <Button>
                  <Link href="/signin">Sign Up</Link>
                </Button>
                <Button variant="link">
                  <Link href="/login">Login </Link>
                </Button></>
            ) : (
              <Button>
                <Link href="/dashboard">Dashboard</Link>
              </Button>

            )
          }
        </div>
        <SidebarTrigger className="sm:hidden" />
      </nav >

    </header >
  );
}