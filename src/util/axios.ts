import { getSession, signOut } from "next-auth/react";
import axios from "axios";

const axiosServices = axios.create({ baseURL: process.env.BASE_URL });

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

// axiosServices.interceptors.request.use(
//   async (config) => {
//     const session = await getSession();
//     config.headers["Authorization"] = `Bearer ${session?.user?.accessToken!}`;
//     config.headers["userName"] = session?.user.userName;
//     config.headers["refreshToken"] = session?.user.refreshToken;
//     config.headers["subscriber"] = session?.user.subscriber;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

axiosServices.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      await signOut({ redirect: false });
      window.location.href = "/login";
    }
    Promise.reject((error.response && error.response.data) || "Wrong Services");
  }
);

export default axiosServices;
