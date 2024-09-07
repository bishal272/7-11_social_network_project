import { currentUser } from "@clerk/nextjs/server";
import TopBar from "./TopBar";

export default async function MainContainer({ children }) {
  const user = await currentUser();
  const data = JSON.parse(JSON.stringify(user));

  return (
    <section className="flex flex-col flex-1 max-w-3xl px-4 md:px-10 lg:px-4 xl:px-20">
      <TopBar user={data} />
    </section>
  );
}
