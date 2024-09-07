import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Logout } from "@mui/icons-material";
import Menu from "./Menu";

export default async function LeftSideBar() {
  const user = await currentUser();
  // console.log(user);

  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <div className="flex flex-col gap-2 my-3">
        <div className="flex flex-col gap-2 items-center text-light-1 my-2">
          <div className="rounded-3xl overflow-hidden">
            <img src={user?.imageUrl} alt="" width={50} height={50} />
          </div>
          <p className="text-small-bold text-light-1">{user?.username}</p>
        </div>
        <div className="flex justify-between text-light-1 gap-2">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Following</p>
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
              <Logout sx={{ color: "white", fontSize: "25px" }} />
              Log Out
            </button>
          </SignOutButton>
        </SignedIn>{" "}
      </div>
    </div>
  );
}
