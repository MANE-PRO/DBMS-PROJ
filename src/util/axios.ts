import { getSession, signOut } from "next-auth/react";
import axios from "axios";

const axiosServices = axios.create({ baseURL: process.env.BASE_URL });
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
