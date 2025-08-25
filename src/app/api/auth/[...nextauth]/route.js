import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Credentials login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // এখানে তুমি DB থেকে check করতে পারো
        if (
          credentials.email === "test@gmail.com" &&
          credentials.password === "123456"
        ) {
          return { id: "1", name: "Test User", email: "test@gmail.com" };
        }
        return null;
      },
    }),
  ],

 

  pages: {
    signIn: "/login", // custom login page
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Successful login হলে সবসময় /products এ redirect করবে
      return "/products";
    },
  },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
