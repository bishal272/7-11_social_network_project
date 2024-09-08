"use client";
import { SignedIn, SignOutButton, UserButton, useUser } from "@clerk/nextjs";

import { Logout } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Loader from "../loader";
import Menu from "./Menu";

export default function LeftSideBar() {
  const { user, isLoaded } = useUser();
  const [Loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${user?.id}`);
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [user]);

  // console.log(user);

  return Loading || !isLoaded ? (
    <Loader />
  ) : (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <div className="flex flex-col gap-2 my-3">
        <div className="flex flex-col gap-2 items-center text-light-1 my-2 ">
          <div className="rounded-3xl overflow-hidden">
            <img src={userData?.profilePhoto} alt="" width={50} height={50} />
          </div>
          <p className="text-small-bold text-light-1">
            {userData?.firstName} {userData?.lastName}
          </p>
        </div>
        <div className="flex justify-between text-light-1 gap-2 my-3">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.posts?.length}</p>
            <p className="text-subtle-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.followers?.length}</p>
            <p className="text-subtle-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.following?.length}</p>
            <p className="text-subtle-medium">Following</p>
          </div>
        </div>
        <hr />
        <Menu />
        <hr />
        <div className="flex gap-4 items-center my-3">
          {" "}
          <UserButton />
          <p className="text-light-1 text-body-bold ">Manage Account</p>
        </div>
        <SignedIn>
          <SignOutButton>
            <button className="text-body-bold text-light-1 flex items-center gap-3">
              <Logout sx={{ color: "white", fontSize: "30px" }} />
              Log Out
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
}
