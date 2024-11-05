import { timestamp, pgTable, text, pgEnum } from "drizzle-orm/pg-core"

export const userRoleEnum = pgEnum('user_role', ['USER', 'ADMIN', "SUPER_ADMIN"]);

export const users = pgTable("users", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text(),
  email: text().unique(),
  emailVerified: timestamp("emailVerified",{ mode: "date" }),
  image: text(),
  role: userRoleEnum().default('USER').notNull(),
})
