"use client";

import { useState, useEffect } from "react";
import Feed from "@components/Feed";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/prompt`
        );

        console.log(response.data.prompts);
        setPosts([...response.data.prompts]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        ThoughtFlix <br />
        <span className="orange_gradient text-center">
          Unbox Your Daily Thoughts
        </span>
      </h1>
      <p className="desc text-center max-lg:text-justify">
        Welcome to ThoughtFlix, where profound wisdom meets cinematic flair.
        Immerse yourself in a world where quotes come to life, each thought
        unfolding like scenes in a movie. ThoughtFlix is not just a platform;
        it's a journey through the landscapes of inspiration, where the power of
        words is captured in every frame. Discover the art of living
        thoughtfully, as we curate and present a reel of insightful quotes that
        resonate with the rhythm of life. Join us on this cinematic voyage,
        where the screen is your canvas, and each quote paints a masterpiece of
        inspiration. Welcome to ThoughtFlix – where ideas sparkle, and thoughts
        shine in the spotlight.
      </p>
      <Feed posts={posts} />
    </section>
  );
};

export default Home;
