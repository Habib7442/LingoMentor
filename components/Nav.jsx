"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { account } from "@appwrite/appwrite";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

const Nav = () => {
  const [toggelDropdown, setToggelDropdown] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const checkAuthenticated = async () => {
      try {
        const response = await account.get();
        setUserDetails(response);
      } catch (error) {
        console.log(error);
      }
    };

    checkAuthenticated();
  }, []);

  return (
    <nav className="flex-between w-full mb-8 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">LingoMentor</p>
      </Link>

      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        {userDetails && (
          <div className="flex gap-3 items-center md-5">
            <p className="text-gray-800 text-sm">
              <span className="font-bold">Hello: </span>
              {userDetails?.name}
            </p>
            <Stack direction="row" spacing={2}>
              <Link href="/profile">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  {userDetails?.name &&
                    userDetails.name.charAt(0).toUpperCase()}
                </Avatar>
              </Link>
            </Stack>
          </div>
        )}
        {!userDetails && (
          <div className="gap-2 flex">
            <Link href="/login" className="outline_btn">
              Sign In
            </Link>
            <Link href="/signup" className="black_btn">
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {userDetails && (
          <div className="flex gap-3 md-5">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggelDropdown((prev) => !prev)}
            />

            {toggelDropdown && (
              <div className="absolute top-12 right-0 bg-white rounded-md shadow-md p-2">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggelDropdown(false)}
                >
                  My Profile
                </Link>
              </div>
            )}
          </div>
        )}

        {!userDetails && (
          <div className="gap-2 flex">
            <Link href="/login" className="outline_btn">Sign In</Link>
            <Link href="/signup" className="black_btn">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
