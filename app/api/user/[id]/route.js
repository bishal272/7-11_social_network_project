import User from "@/lib/models/User";
import { initMongoose } from "@/lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
  try {
    await initMongoose();
    const user = await User.findOne({ clerkId: params.id }).populate("followers following").exec();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("failed to get user", { status: 500 });
  }
};
