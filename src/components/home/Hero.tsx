import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section>
      <h1 className="font-medium text-3xl py-10 text-center">
        Discover local store discount near you!
      </h1>
      <div className="flex flex-wrap max-w-xl m-auto gap-2 items-center">
        <Input
          placeholder="Serach for brands"
          className="flex-1 ring-1 ring-ring"
        />
        <Button>Serach</Button>
      </div>
    </section>
  );
}

export default Hero;
