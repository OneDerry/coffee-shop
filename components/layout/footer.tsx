import { Separator } from "../common";

export default function Footer() {
  return (
    <footer className="text-2xl font-semibold h-[400px] bg-[linear-gradient(to_right,transparent_10%,var(--primary)_100%),url('/latte.JPG')] bg-cover bg-no-repeat py-4 text-secondary">
      <div className="grid sm:grid-cols-2">
        <div className="container mx-auto px-4 ">
          <p className="text-center">Coffee Haven</p>
        </div>
        <div className="grid text-2xl font-semibold sm:grid-cols-3">
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <a href="">Instagram</a>
            <a href="">Tiktok</a>
            <a href="">Facebook</a>
            <a href="">Whatsapp</a>
          </div>
          <div>
            <h1>Contact</h1>
            <p>(415) 555-0173</p>
            <p>
              2237 Valencia Street <br />
              San Francisco, CA 9410
            </p>
            <p>coffeehaven@gmail.com</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="">
        <p>Copyright, All Rights Reserved</p>
      </div>
    </footer>
  );
}
