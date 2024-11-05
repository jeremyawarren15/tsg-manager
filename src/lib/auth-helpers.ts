import { auth } from "@/auth"
import { eq } from "drizzle-orm"
import { db, users } from "@/db"

export async function isAdmin(): Promise<boolean> {
  const session = await auth()

  if (!session?.user?.email) {
    return false
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, session.user.email),
  })

  return user?.role === "ADMIN"
}