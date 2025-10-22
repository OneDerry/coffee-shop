"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common";
import Image from "next/image";

import coffee2 from "@/public/coffee2.jpeg";
import coffee7 from "@/public/Cappuccino.jpeg";
import { Dot } from "lucide-react";

export default function Socials() {
  const reviews = [
    {
      id: 1,
      image: coffee2,
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
      image: coffee7,
      title: "Hazelnut Latte",
      description: "Nutty aroma with a rich espresso base and silky milk.",
      price: "$4.20",
    },
  ];

  return (
    <main>
      <div>
        <h1 className="text-4xl font-bold text-center">Our Customer Reviews</h1>
      </div>
      <section className="grid sm:grid-cols-3 gap-10 max-w-[80%] mx-auto">
        {reviews.map((item) => (
          <Card
            key={item.id}
            data-carousel-card // For width detection
            className="min-w-[260px] snap-center border-none shadow-none flex-shrink-0 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="p-0 relative bg-white">
              <div className="flex items-center justify-between w-full">
                {/* Left: avatar + text */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-base truncate">
                      Parker
                    </span>
                    <span className="text-xs text-gray-500 truncate">
                      Florida
                    </span>
                  </div>
                </div>
                {/* Right: button */}
                <Button variant="ghost" size="icon">
                  <Dot />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="w-160 h-160 rounded-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-t-2xl  object-cover h-48 w-full"
                />
              </div>
              <CardTitle className="text-lg font-semibold mb-2">
                {item.title}
              </CardTitle>

              <div>
                <div className="w-40 h-40 rounded-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-t-2xl  object-cover h-48 w-full"
                  />
                </div>
              </div>
              <span className="absolute top-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded-md">
                {item.price}
              </span>
            </CardContent>
            <CardFooter>
              <p>June 21</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
