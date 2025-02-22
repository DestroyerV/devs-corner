"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  useSession,
  signIn,
  signOut,
  getProviders,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

const Navbar = () => {
  const { data: session } = useSession();

  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src={"/assets/images/icon.svg"}
          alt='logo'
          width={40}
          height={40}
          className='object-contain'
        />
        <p className='logo_text'>Dev Corner</p>
      </Link>

      {/* Desktop Nav */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5 '>
            <Link href='/create-post' className='black_btn'>
              Create Post
            </Link>

            <button
              type='button'
              onClick={() => signOut()}
              className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user?.image!}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {
              // providers &&
              // Object.values(providers).map((provider) => (
              <button
                type='button'
                // key={provider.name}
                onClick={() => signIn("google")}
                className='black_btn'>
                Sign In
              </button>
              // ))
            }
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='flex relative sm:hidden'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user?.image!}
              width={37}
              height={37}
              alt='profile'
              className='rounded-full cursor-pointer'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link
                  href='/create-post'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Create Post
                </Link>
                <button
                  type='button'
                  className='mt-3 w-full black_btn'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {
              // providers &&
              // Object.values(providers).map((provider) => (
              <button
                type='button'
                // key={provider.name}
                onClick={() => signIn("google")}
                className='black_btn'>
                Sign In
              </button>
              // ))
            }
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
