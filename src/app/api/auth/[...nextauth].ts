// import axios, { AxiosError } from "axios";
// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// interface Credentials {
//   email: string;
//   password: string;
//   subscriber?: string;
// }

// interface AccessTokenResponse {
//   accessToken: string;
//   refreshToken: string;
// }

// interface User {
//   id: number;
//   username: string;
//   // Add any other user-related fields here
// }

// interface SessionData {
//   user: User;
//   sessionId: string;
// }

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       id: "login",
//       name: "Login",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: Credentials, req: NextApiRequest) {
//         try {
//           const userResponse = await axios.post<User>(
//             `${process.env.BACKEND_URL}/auth/v1/login`,
//             {
//               userName: credentials.email,
//               password: credentials.password,
//             }
//           );

//           const user = userResponse.data;

//           if (user) {
//             const sessionResponse = await axios.get<SessionData>(
//               `http://localhost:3000/signin`,
//               {
//                 headers: {
//                   userName: credentials.email,
//                   refreshToken: userResponse.data.refreshToken,
//                   subscriber: credentials.subscriber,
//                   Authorization: `Bearer ${userResponse.data.accessToken}`,
//                 },
//               }
//             );

//             const session = sessionResponse.data;

//             if (session) {
//               user.sessionId = session.sessionId;
//               return user;
//             }
//           }

//           return null;
//         } catch (error) {
//           const errorMessage =
//             (error as AxiosError)?.response?.data?.error || "Unknown error";
//           throw new Error(errorMessage);
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, user }) {
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
//     async session({ session:{ accessToken:string, user:string }, token:any }) {
//       session.accessToken = token.accessToken;
//       session.user = token.user;
//       return session;
//     },
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 60 * 60,
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// const handler = NextAuth({
//   ...authOptions
// });

// export default handler;
