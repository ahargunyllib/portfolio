"use client";
import { Button } from "@/components/ui/button";
import TypeIt, { TypeItProps } from "typeit-react";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";

export default function Home() {
  const [mountName, setMountName] = useState(false);
  const [mountRole, setMountRole] = useState(false);
  const [mountButton, setMountButton] = useState(false);

  return (
    <div className="animate-fade-in p-8 flex flex-col items-start justify-start gap-4 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100">
      {/* <h4 className="text-white">Hi!</h4> */}
      {/* <h1 className="text-white text-start">I&apos;m Nugraha Billy Viandy</h1>
      <h3 className="text-white text-start">Fullstack Developer</h3> */}
      {/* <TypeAnimation className="text-white" wrapper="h4" repeat={0} speed={20} sequence={["Hi!", 1000, () => setMountName(true)]} />
      {mountName && <TypeAnimation className="text-white" wrapper="h1" repeat={0} speed={20} sequence={["I'm Nugraha Billy Viandy", 1000, () => setMountRole(true)]} />}
      {mountRole && <TypeAnimation className="text-white" wrapper="h3" repeat={Infinity} speed={20} sequence={["Fullstack Developer", 3000, "Flutter Developer"]} />} */}
      <h4 className="text-white">
        <TypeIt
          options={{
            strings: "Hi!",
            lifeLike: true,
            waitUntilVisible: true,
            afterComplete: async (instance: TypeItProps) => {
              setMountName(true);
              instance.destroy();
            },
          }}
        />
      </h4>
      {mountName && <h1 className="text-white">
        <TypeIt
          options={{
            strings: "I'm Nugraha Billy Viandy",
            lifeLike: true,
            waitUntilVisible: true,
            afterComplete: async (instance: TypeItProps) => {
              setMountRole(true);
              instance.destroy();
            },
          }}
        />
      </h1>}
      {mountRole && <h3 className="text-white">
        <TypeAnimation className="text-white" repeat={Infinity} speed={20} sequence={["Fullstack Developer", 2000, "Flutter Developer", 1000, () => setMountButton(true), 2000]} />
      </h3>}

      {mountButton && <Button className={mountButton ? "animate-fade-in" : "animate-button-out"}>Get to know me!</Button>}
    </div>
  );
}
