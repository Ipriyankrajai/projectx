import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section>
      <h1 className="font-medium text-3xl py-10 text-center">
        Discover local store discont near you!
      </h1>
      <div className="flex flex-wrap max-w-xl m-auto gap-2 items-center">
        <Input placeholder="Serach for brands" />
        <Button>Serach</Button>
      </div>
    </section>
  );
}

export default Hero;
