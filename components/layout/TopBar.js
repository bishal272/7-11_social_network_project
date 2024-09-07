"use client";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { Logout, Search } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export default function TopBar({ user }) {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => {}} />
      </div>
      <button className="create-post-btn" onClick={() => {}}>
        Create Post
      </button>
      <SignedIn>
        <SignOutButton>
          <button className="text-body-bold text-light-1 flex  md:hidden">
            <Logout sx={{ color: "white", fontSize: "25px" }} />
          </button>
        </SignOutButton>
      </SignedIn>
      <Link href={"/"}>
        <img
          src={user?.imageUrl}
          alt=""
          width={50}
          height={50}
          className=" rounded-full md:hidden"
        />
      </Link>
    </div>
  );
}
