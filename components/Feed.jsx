"use client";

import { useState } from "react";
import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Feed = () => {
  const { data: session } = useSession();
  const [searchText, setSearchText] = useState();
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const { data: posts, isValidating } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/prompt`,
    fetcher
  );

  console.log(posts);

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = filterPrompts(e.target.value);
        setSearchedResults(searchResults);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <h1 className="orange_gradient text-2xl font-bold mb-10">
        Reflective Moments : Dive into Our Thoughtful Images
      </h1>
      <VideoPlayer />

      <h1 className="orange_gradient text-2xl font-bold mt-20 mb-5">
        Explore ThoughtFlix : Dive into the minds of creative thinkers
      </h1>
      {session && session.user && (
        <div className="flex flex-col justify-center items-center">
          <p className="text-slate-500 text-base font-satoshi">
            We value your thinking and interests. Share your thoughts on
            ThoughtFlix ! Create a post and let your voice be heard
          </p>
          <Link
            href="/create-prompt"
            className="shadow-lg px-6 py-2 rounded-full border border-[#ea590c] font-medium text-[#ea590c] hover:bg-[#ea590c] hover:text-white mt-10"
          >
            Create Post
          </Link>
        </div>
      )}
      <form className="relative w-full flex-center max-w-xl mt-10">
        <input
          type="text"
          placeholder="Search for a tag or username"
          required
          className="search_input peer"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      {isValidating ? (
        <p className="mt-20 text-2xl font-bold orange_gradient">Loading...</p>
      ) : (
        <div>
          {searchText ? (
            <PromptCardList
              data={searchedResults}
              handleTagClick={handleTagClick}
            />
          ) : (
            <PromptCardList data={posts} handleTagClick={handleTagClick} />
          )}{" "}
        </div>
      )}

      <Link
        href="/posts"
        className="shadow-lg px-6 py-2 rounded-full border border-[#ea590c] font-medium text-[#ea590c] hover:bg-[#ea590c] hover:text-white mt-10"
      >
        Go to all posts{" "}
      </Link>
    </section>
  );
};

export default Feed;

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, index) => (
        <PromptCard key={index} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};
