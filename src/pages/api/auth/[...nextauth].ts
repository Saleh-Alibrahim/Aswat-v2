import NextAuth, { type NextAuthOptions } from "next-auth";

// Prisma adapter for NextAuth, optional and can be removed
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "../../../common/validation/auth";
import { verify } from "argon2";


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
        const creds = await loginSchema.parseAsync(credentials);
    
        const user = await prisma.user.findFirst({
          where: { email: creds.email },
        });
        if (!user) {
          throw new Error("خطأ في البريد الالكتروني او كلمة المرور");
        }
       
         const isValidPassword = await verify(user.password, creds.password);

        if (!isValidPassword) {
          throw new Error("خطأ في البريد الالكتروني او كلمة المرور");
        }

         return {
          id: user.id,
          email: user.email,
          username: user.username,
        };
      }
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
};

export default NextAuth(authOptions);


