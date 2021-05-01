import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        bio ,
        "authorImage": image.asset->url
   }`
      )
      .then(data => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) return <h1>Loading..</h1>;
  return (
    <main className="relative">
      <img
        src="https://images.unsplash.com/photo-1616033481409-1bc22a923483?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        className="absolute  w-full h-full"
        alt="background image"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gray-800 rounded-lg shado-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-f w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center ">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-greeb-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              {" "}
              <BlockContent
                blocks={author.bio}
                project="8v51lno0"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
