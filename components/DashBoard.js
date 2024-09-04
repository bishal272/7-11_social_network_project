import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className=" gap-5 flex items-center">
      <h1 className="text-xl">Welcome to 7-11 Networking</h1>
      <SignedOut>
        <SignInButton>
          <button className="rounded-xl bg-white text-black px-5 py-2 hover:scale-105 animate-bounce">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
