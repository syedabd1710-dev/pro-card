"use client";

import {

  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button"
import { FaHeart } from "react-icons/fa";

const Mycard = () => {


const handleLike = (e) => {
  const heart = e.currentTarget.querySelector(".heart-icon");

  heart.classList.remove("animate-heart-pop");

  void heart.offsetWidth;

  heart.classList.add("animate-heart-pop");
   heart.classList.add("liked");
};

  return (
    <div className="h-screen flex items-center justify-center">

      <Card className="h-auto w-[300px] rounded-xl border border-gray-200 bg-white shadow-2xl shadow-blue-600">

        <CardHeader className="pb-3">

          <CardTitle className="flex items-center gap-x-1 text-xl font-bold text-gray-900">

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            Abdur-Rahman

          </CardTitle>

          <CardAction>
             <Button onClick={handleLike} variant="outline" size="icon">
  <FaHeart className="heart-icon" />
</Button>
          </CardAction>

        </CardHeader>

        <CardContent className="space-y-4">

          <div>

            <h1 className="text-lg font-bold leading-snug text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti?
            </h1>

            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

          </div>

          <div className="flex flex-wrap gap-2">

            <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
              SMM
            </span>

            <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
              Grouth Strategy
            </span>

            <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
              Startup
            </span>

            <span className="rounded-md bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
              Brand
            </span>

          </div>

        </CardContent>

        <CardFooter className="flex flex-col items-start gap-3 border-t border-dashed border-gray-300 pt-4">

          <div>

            <h1 className="text-2xl font-bold text-gray-900">
              $150 - $200/h
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Fix Rate - 100% Remote
            </p>

          </div>
           <Button variant="secondary" className="w-full text-lg shadow-[0_0_8px_#1d4ed8] bg-blue-700 text-white hover:text-blue-800 ">
             Secondary
           </Button>

        </CardFooter>

      </Card>

    </div>
  );
};

export default Mycard;