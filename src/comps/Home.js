import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <main className="">
      <img
        src="https://images.unsplash.com/photo-1587133599421-40a3cd84831b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        className="absolute  w-full h-full "
        alt="background image"
      />
      <seaction className="relative flex justify-center min-h-screen pt-48 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-slug home-name">
          Aloha. I'm Ntuthuko
        </h1>
      </seaction>
    </main>
  );
}
