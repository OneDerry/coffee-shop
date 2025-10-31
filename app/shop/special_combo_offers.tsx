"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/common";
import Image from "next/image";

import coffee6 from "@/public/coffee6.jpeg";
import coffee2 from "@/public/coffee2.jpeg";

export default function SpecialCombo() {
  const special = [
    {
      id: 1,
      image: coffee6,
      title: "Brown Sugar Latte",
      description: "Espresso sweetened with caramelized brown sugar syrup.",
      oldPrice: "$6.55",
      price: "$4.55",
    },
    {
      id: 2,
      image: coffee2,
      title: "Iced Vanilla Latte",
      description: "Chilled espresso with vanilla syrup and cold milk.",
      oldPrice: "$7.25",
      price: "$4.60",
    },
  ];
  return (
    <main className="">
      <div>
        <h1 className="text-5xl font-bold mb-8 text-center">
          Special Combo Offers
        </h1>
      </div>
      <div className="max-w-[80%] mx-auto grid gap-10 sm:grid-cols-2">
        {special.map((item) => (
          <Card
            key={item.id}
            // data-carousel-card // For width detection
            className="shadow-none border-none bg-slate-0 flex-shrink-0 hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="p-0 relative">
              <div className="w-100 h-120">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="absolute bottom-0 right-0 bg-primary text-white font-bold text-3xl px-6 py-8 rounded-tl-xl">
                <span className="line-through">{item.oldPrice}</span>{" "}
                {item.price}
              </p>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-2">
                {item.title}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
