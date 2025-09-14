import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const toilets = pgTable("toilets",{
    id: integer().primaryKey().generatedAlwaysAsIdentity().notNull(),
    toilet_name: varchar({length:50}),
    address: varchar({length:100}),
    price: varchar({length:10}),
    latitude: varchar({length:50}),
    longitude: varchar({length:50})
})