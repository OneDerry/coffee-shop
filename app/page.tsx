"use client";

import Hero from "./home/page";
import Shop from "./shop/page";
// import Form from "./form/page";
import Socials from "./socials/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Shop />
      <Socials />
      {/* <Form /> */}
    </div>
  );
}
