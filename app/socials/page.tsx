"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/common";
import Image from "next/image";

import People1 from "@/public/People1.jpeg";
import People2 from "@/public/People2.jpeg";
import People3 from "@/public/People3.jpeg";

import { Bookmark, Dot, Heart, MessageCircle, Share } from "lucide-react";

export default function Socials() {
  const reviews = [
    {
      id: 13,
      image: People1,
      title: "Velvet Latte",
      description: "Smooth and creamy with a hint of caramel sweetness.",
      price: "$4.50",
    },
    {
      id: 14,
      image: People2,
      title: "Hazelnut Latte",
      description: "Nutty aroma with a rich espresso base and silky milk.",
      price: "$4.20",
    },
    {
      id: 15,
      image: People3,
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
            // data-carousel-card // For width detection
            className="min-w-[260px] snap-center border-none shadow-none flex-shrink-0 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="p-0 relative bg-white">
              <div className="flex items-center justify-between w-full">
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
                <Button variant="ghost" size="icon">
                  <Dot />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="relative p-4 flex flex-col">
              <div className="w">
                <Image
                  src={item.image}
                  alt={item.title}
                  // fill
                  className="object-cover w-3xl"
                />
              </div>
              <div className="my-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <Heart />
                    <MessageCircle />
                    <Share />
                  </div>
                  <div>...</div>
                  <Bookmark />
                </div>
              </div>
            </CardContent>

            <CardFooter className="relative flex flex-row">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="rounded-full object-cover  w-full"
                  />
                </div>
                <div>
                  <p>Liked by name and 4 others</p>
                  <p>scomments @group hangouts</p>
                </div>
              </div>

              <p>June 21</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
