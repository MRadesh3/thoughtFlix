"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Motivatuonal_Images } from "@functions";

const VideoPlayer = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-4 gap-10 w-full">
        {Motivatuonal_Images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            width={200}
            height={200}
            alt={image.alt}
            className="object-cover w-full h-[405px] shadow-2xl max-md:col-span-4 max-lg:col-span-2"
          ></Image>
        ))}
      </div>
      <section className="flex max-lg:flex-col gap-10 max-lg:gap-10 mt-20 max-md:mt-10">
        <div>
          <video
            src="/assets/videos/Motivational_Video.mp4"
            controls
            autoPlay
            loop
            muted
            style={{ height: "auto", width: "100%" }}
          ></video>
        </div>
        <div>
          <video
            src="/assets/videos/Motivational_Video_2.mp4"
            muted
            loop
            autoPlay
            controls
            style={{ height: "auto", width: "100%" }}
          ></video>
        </div>
      </section>
    </Fragment>
  );
};

export default VideoPlayer;
