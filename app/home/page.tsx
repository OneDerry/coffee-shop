import { Button } from "@/components/common";

export default function Hero() {
  const latte = "/latte.JPG";

  return (
    <main
      className="min-h-screen items-center justify-items-center font-sans p-8 pb-20 gap-16 sm:p-20 bg-[linear-gradient(to_right,var(--primary)_50%,transparent_100%),url('/latte.JPG')] bg-cover bg-no-repeat bg-right"
      style={{ backgroundImage: `${latte}` }}
    >
      <div className="">
        <h1 className="text-4xl font-bold">
          Brewed with passion, served with love.
        </h1>
        <p>
          From velvety espresso to smooth pour-overs, every cup is crafted to
          stir your senses and calm your soul
        </p>
        <Button variant="secondary">Order now</Button>
      </div>
    </main>
  );
}
