"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/common";
import Image from "next/image";

import coffee6 from "@/public/coffee6.jpeg";
import coffee7 from "@/public/Cappuccino.jpeg";

export default function Socials() {
  const reviews = [
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
  ];

  return (
    <main>
      {reviews.map((item) => (
        <Card
          key={item.id}
          data-carousel-card // For width detection
          className="min-w-[260px] min-h-[460px] snap-center border-none shadow-none flex-shrink-0 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
        >
          <CardHeader className="p-0 relative">
            <div className="w-160 h-160">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-t-2xl  object-cover h-48 w-full"
              />
            </div>
            <span className="absolute top-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded-md">
              {item.price}
            </span>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg font-semibold mb-2">
              {item.title}
            </CardTitle>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
