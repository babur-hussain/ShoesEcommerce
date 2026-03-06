import {
  pgTable,
  serial,
  text,
  numeric,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image"),
  category: text("category"),
  brand: text("brand").default("Nike"),
  stock: integer("stock").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});
