// app/api/auth/register/route.ts
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { username, password, name, email } = await request.json();

  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Store the new user in the database
    const result = await sql`
      INSERT INTO users (username, password, name, email) 
      VALUES (${username}, ${hashedPassword}, ${name}, ${email})
      RETURNING id, username, name, email;
    `;

    const user = result.rows[0];

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ error: "User registration failed." }, { status: 500 });
  }
}
