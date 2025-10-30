import { Button } from "@/components/common";

export default function Hero() {
  return (
    <main className="min-h-screen text-white items-center flex justify-start font-sans p-8 pb-20 gap-16 sm:p-20 bg-[linear-gradient(to_right,var(--primary)_50%,transparent_100%),url('/latte.JPG')] bg-cover bg-no-repeat bg-right">
      <div className="space-y-20">
        <h1 className="text-9xl font-bold w-[750px]">
          Brewed with passion, served with <span className="font-serif italic">love.</span>
        </h1>
        <p className="text-4xl w-[670px] -mt-20">
          From velvety espresso to smooth pour-overs, every cup is crafted to
          stir your senses and calm your soul
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="px-10 py-8 text-3xl text-bold text-primary"
        >
          Order now
        </Button>
      </div>
    </main>
  );
}
