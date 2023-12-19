"use client";

// Import necessary modules
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import useSWR from "swr";

// Fetcher function to be used with useSWR
const fetcher = (url) => fetch(url).then((res) => res.json());

// Component for displaying a list of prompt cards
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, index) => (
        <PromptCard key={index} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

// Main Feed component
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Use useSWR for data fetching
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/prompt`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Filter prompts based on search text
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    );
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    const value = e.target.value;
    setSearchText(value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = filterPrompts(value);
        setSearchedResults(searchResults);
      }, 500)
    );
  };

  // Handle tag click
  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  // // Display loading state while data is being fetched
  // if (!posts && isValidating) {
  //   return <p>Loading...</p>;
  // }

  return (
    <section className="feed">
      <form className="relative w-full flex-center max-w-xl">
        <input
          type="text"
          placeholder="Search for a tag or username"
          required
          className="search_input peer"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      {/* Display search results if there's a search query, otherwise display all posts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
