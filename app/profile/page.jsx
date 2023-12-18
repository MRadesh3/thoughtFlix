"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${session?.user.id}/posts`
      );
      const data = await response.json();

      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Profile
        name="My"
        desc="Welcome to your ThoughtFlix profile, where wisdom finds its reel. Dive into a cinematic journey of thought-provoking quotes and insightful reflections curated just for you. Your profile is your personal canvas, a space to capture and share the essence of your unique perspective"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {posts.length === 0 && (
        <div className="mb-20 flex flex-col justify-center items-center gap-7">
          <p className="font-inter text-xl font-bold">No Posts... Create One</p>
          <button
            type="button"
            onClick={() => router.push("/create-prompt")}
            className="bg-[#ea590c] text-white rounded-full font-medium px-6 py-2"
          >
            {" "}
            Create Post{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default MyProfile;
