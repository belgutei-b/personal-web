import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return user.email === 'belgutei0323@gmail.com';
    },
  },
  secret: process.env.NEXTAUTH_SECRET
}

export const handler =  NextAuth(authOptions);

export { handler as GET, handler as POST }