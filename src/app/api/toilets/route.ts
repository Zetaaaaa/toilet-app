// app/api/toilets/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { toilets } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(toilets);
  return NextResponse.json(data);
}

// fetch("route",{method:"POST"})
export async function POST() {
   return NextResponse.json("POST");
}