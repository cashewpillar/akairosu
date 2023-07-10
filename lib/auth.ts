import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  debug: false,
  session: {strategy: "jwt"},
  providers: [
      CredentialsProvider({
          name: "Sign in",
          credentials: {
              email: {
                  label: "Email",
                  type: "email",
                  placeholder: "example@example.com",
              },
              password: {label: "Password", type: "password"},
          },
          async authorize(credentials) {
              const users = [
                  {
                      id: "1", 
                      email: process.env.ADMIN_EMAIL, 
                      password: process.env.ADMIN_PASSWORD
                  },
              ];

              const user = users.find(user => user.email === credentials?.email);

              if (user && user?.password === credentials?.password) {
                  return {id: user.id, name: user.email, email: user.email, role: "admin"};
              } else {
                  return null;
              }
          }
      }
      ),
  ],
  callbacks: {
      jwt: async ({token, user, account, profile}) => {
          // Add role to the user info in the token right after sign in
          // console.log('in jwt', {user, token, account, profile})

          if (user) {
              token.user = user;
              const u = user as any
              token.role = u.role;
          }
          if (account) {
              token.accessToken = account.access_token
              token.refreshToken = account.refresh_token
          }
          return token;
      },
      session: ({session, token}) => {
          // console.log("in session", {session, token});
          token.accessToken
          return {
              ...session,
              user: {
                  ...session.user,
                  role: token.role,
                  accessToken: token.accessToken,
                  refreshToken: token.refreshToken,
              },

          };
      },
  }
}