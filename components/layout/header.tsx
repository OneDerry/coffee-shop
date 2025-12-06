import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-transaprent py-4 text-white">
      <div className="container mx-auto px-6 flex justify-between items-center bg-primary/80 p-4 rounded-2xl">
        <div>
          <h1 className="text-2xl font-serifs font-bold">Coffee Haven</h1>
        </div>
        <div>
          <nav className="flex text-xl items-center gap-28">
            <ul className="flex items-center gap-28">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/">Socials</Link>
              </li>
            </ul>
            <p className="flex items-center gap-2">
              Cart <ShoppingCartIcon className="w-4 mt-1 h-4" />
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}
