"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/thoughtflix.png"
          alt="logo"
          width={250}
          height={250}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-7 justify-center items-center">
            <Link
              href="/create-prompt"
              className="bg-[#ea590c] text-white rounded-full font-medium px-6 py-2"
            >
              Create Post
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="border border-[#ea590c] text-[#ea590c] rounded-full font-medium px-6 py-2 hover:bg-[#ea590c] hover:text-white transition duration-300 ease-in-out"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={50}
                height={50}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="bg-[#ea590c] text-white rounded-full font-medium px-6 py-2"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={50}
              height={50}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && (
              <div>
                {Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="bg-[#ea590c] text-white rounded-full font-medium px-6 py-2"
                  >
                    Sign In
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
