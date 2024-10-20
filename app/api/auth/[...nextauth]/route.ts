import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";

// Define the shape of the credentials
interface Credentials {
  username: string;
  password: string;
}

// Define the shape of the user from the database
interface User {
  id: string; // Expecting id to be a string for NextAuth compatibility
  name: string;
  email: string;
  password: string; // Include password for validation
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
          return null; // Handle undefined credentials
        }

        const { username, password } = credentials;

        try {
          // Fetch user data from PostgreSQL
          const result = await sql`
            SELECT id::text AS id, name, email, password FROM users WHERE username = ${username}
          `;

          // Check if we got any results back and handle rowCount potentially being null
          if (result.rowCount !== null && result.rowCount > 0) {
            const user: User = result.rows[0] as User; // Cast to User type

            // Directly compare the password without hashing
            if (password === user.password) {
              // Return only id, name, and email to NextAuth
              return { id: user.id, name: user.name, email: user.email };
            }
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }

        return null; // Invalid credentials
      },
    }),
  ],
  pages: {
    signIn: '/login', // Custom login page
  },
});

export { handler as GET, handler as POST };
