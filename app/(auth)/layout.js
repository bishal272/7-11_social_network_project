import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "Next 14 Social media",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-purple-2 flex justify-center items-center h-screen`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
