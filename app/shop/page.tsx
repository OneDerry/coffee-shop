"use client";
import React from "react";

import Image from "next/image";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/common";

import coffee6 from "@/public/coffee6.jpeg";
import coffee2 from "@/public/coffee2.jpeg";
import coffee7 from "@/public/Cappuccino.jpeg";
import coffee3 from "@/public/coffee3.jpeg";
import coffee4 from "@/public/coffee4.jpeg";
import coffee5 from "@/public/coffee5.jpeg";
import SpecialCombo from "./special_combo_offers";

export default function Shop() {
  const coffee = [
    {
      id: 1,
      image: coffee6,
      title: "Velvet Latte",
      description: "Smooth and creamy with a hint of caramel sweetness.",
      price: "$4.50",
    },
    {
      id: 2,
      image: coffee7,
      title: "Hazelnut Latte",
      description: "Nutty aroma with a rich espresso base and silky milk.",
      price: "$4.20",
    },
    {
      id: 3,
      image: coffee2,
      title: "Mocha Latte",
      description: "A perfect blend of espresso, chocolate, and steamed milk.",
      price: "$4.80",
    },
    {
      id: 4,
      image: coffee3,
      title: "Caramel Latte",
      description:
        "Sweet caramel drizzle over velvety steamed milk and espresso.",
      price: "$4.60",
    },
    {
      id: 5,
      image: coffee4,
      title: "Vanilla Latte",
      description: "Classic vanilla flavor with a smooth espresso kick.",
      price: "$4.30",
    },
    {
      id: 6,
      image: coffee5,
      title: "Cinnamon Latte",
      description: "Warm cinnamon spice blended into a creamy espresso latte.",
      price: "$4.70",
    },
    {
      id: 7,
      image: coffee3,
      title: "Toffee Nut Latte",
      description:
        "Rich espresso balanced with buttery toffee and nut flavors.",
      price: "$4.90",
    },
    {
      id: 8,
      image: coffee7,
      title: "Almond Latte",
      description: "Espresso mixed with almond milk for a light, nutty flavor.",
      price: "$4.40",
    },
    {
      id: 9,
      image: coffee6,
      title: "Brown Sugar Latte",
      description: "Espresso sweetened with caramelized brown sugar syrup.",
      price: "$4.55",
    },
    {
      id: 10,
      image: coffee2,
      title: "Iced Vanilla Latte",
      description: "Chilled espresso with vanilla syrup and cold milk.",
      price: "$4.60",
    },
  ];

  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    const node = carouselRef.current;
    if (!node) return;
    const card = node.querySelector("[data-carousel-card]") as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 24;
    if (dir === "left")
      node.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    else node.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <main>
      <section className=" py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Bestsellers</h1>
        <div className="relative max-w-[80%] overflow-x-auto mx-auto scroll-hidden ">
          <button
            aria-label="Scroll left"
            onClick={() => scrollCarousel("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow-md p-2 hover:bg-white/100 transition-all hidden md:block"
            style={{ pointerEvents: "auto" }}
          >
            <span>&larr;</span>
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollCarousel("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow-md p-2 hover:bg-white/100 transition-all hidden md:block"
            style={{ pointerEvents: "auto" }}
          >
            <span>&rarr;</span>
          </button>
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto px-6 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            tabIndex={0}
            aria-label="Coffee carousel"
            style={{ scrollbarWidth: "thin" }}
          >
            {coffee.map((item) => (
              <Card
                key={item.id}
                // data-carousel-card
                className="border-none shadow-none flex bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-[300px] h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 bg-primary text-white font-bold text-3xl px-4 py-6 font-serif rounded-tl-xl">
                    {item.price}
                  </span>
                </div>
                <div className="-0">
                  <CardTitle className="text-2xl font-bold">
                    {item.title}
                  </CardTitle>
                  <CardDescription className=" text-gray-500">
                    {item.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="default" size="lg" className="px-10 py-8 text-2xl">
            View Menu
          </Button>
        </div>
      </section>
      <section className="mt-20">
        <SpecialCombo />
      </section>
    </main>
  );
}
