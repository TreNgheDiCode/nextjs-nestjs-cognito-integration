import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
      jwks_endpoint: process.env.COGNITO_JWKS_ENDPOINT,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      console.log(token, account);
      return token;
    },
  },
});
