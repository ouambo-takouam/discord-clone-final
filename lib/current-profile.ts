import { auth } from "@clerk/nextjs";
import { db } from "@lib/db";

export async function currentProfile() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  return await db.profile.findUnique({
    where: {
      userId,
    },
  });
}
