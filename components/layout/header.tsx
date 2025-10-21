import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-transaprent py-4 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Coffee Haven</h1>
        </div>
        <div>
          <nav className="flex text-4xl items-center gap-28">
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
              Cart <ShoppingCartIcon className="w-4 h-4" />
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}
