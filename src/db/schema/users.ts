import { timestamp, pgTable, text, pgEnum } from "drizzle-orm/pg-core"

export const userRoleEnum = pgEnum('user_role', ['USER', 'ADMIN', "SUPER_ADMIN"]);

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: userRoleEnum("role").default('USER').notNull(),
})
