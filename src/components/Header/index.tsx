import Link from "next/link";

const navLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "anki",
    href: "/anki",
  },
  // {
  //   name: "blog",
  //   href: "/blog",
  // },
  // {
  //   name: "contact",
  //   href: "/contact",
  // },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          {navLinks.map((nav, id) => (
            <li key={id} className="link">
              <Link href={nav.href}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-0 sm:gap-4">
        </div>
      </nav>
    </header>
  );
}