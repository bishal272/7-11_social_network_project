import ButtomBar from "@/components/layout/ButtomBar";
import LeftSideBar from "@/components/layout/LeftSideBar";
import MainContainer from "@/components/layout/MainContainer";
import RightSideBar from "@/components/layout/RightSideBar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social media",
  description: "Next 14 app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1 min-h-screen`}>
          <main className="flex flex-row w-full justify-between">
            <SignedOut>
              <SignInButton>
                <div className="flex items-center justify-center h-screen w-screen">
                  <button className="text-light-1 bg-purple-1 rounded-lg px-5 py-3 ">
                    Sign In
                  </button>
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <LeftSideBar />
              <MainContainer>{children}</MainContainer>
              <RightSideBar />
            </SignedIn>
          </main>
          <ButtomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
