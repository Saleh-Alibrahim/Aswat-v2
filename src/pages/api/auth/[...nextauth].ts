import NextAuth, { type NextAuthOptions } from "next-auth";

// Prisma adapter for NextAuth, optional and can be removed
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import CredentialsProvider from "next-auth/providers/credentials";


interface ILoginForm {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
     CredentialsProvider({
       name: "Credentials",
       type: "credentials",
      credentials: {},
      async authorize(credentials, _req) {
        const { email, password } = credentials as ILoginForm;    
        if(email !== 'saleh@saleh.com' || password !== '123') {
          return null;
        }
        return {
          id: 1,
          name: 'Saleh',
          email: 'saleh@saleh.com',
          role:'admin'
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login'
  },
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
   callbacks: {
     jwt({user,token}) {
       if (user) {
         token.id = user.id;
       }
       return token;
     }
  },
  jwt: {
    secret: env.NEXTAUTH_SECRET,
   }
};

export default NextAuth(authOptions);


