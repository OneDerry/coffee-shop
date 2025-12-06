import { Separator } from "../common";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_right,transparent_10%,var(--primary)_100%),url('/coffee6.jpeg')] bg-cover bg-no-repeat py-10 text-secondary">
      <div className="max-w-[80%] mx-auto flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-5 items-start">
          <div className="md:col-span-3">
            <p className="text-xl md:text-2xl font-semibold italic">
              Coffee Haven
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-3 gap-8">
            <div className="space-y-3 text-sm md:text-base">
              <ul className="space-y-1">
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Cart</li>
              </ul>
            </div>

            <div className="space-y-3 text-sm md:text-base">
              <div className="flex flex-col space-y-1">
                <a href="">Instagram</a>
                <a href="">Tiktok</a>
                <a href="">Facebook</a>
                <a href="">Whatsapp</a>
              </div>
            </div>

            <div className="space-y-3 text-sm md:text-base">
              <p className="font-semibold">Contact</p>
              <p>(415) 555-0173</p>
              <p>
                2237 Valencia Street
                <br />
                San Francisco, CA 9410
              </p>
              <p>coffeehaven@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Separator className="w-full md:w-[70%]" />
          <div className="flex items-center gap-2 text-xs md:text-sm italic">
            <span>ⓒ</span>
            <span>Copyright, All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
