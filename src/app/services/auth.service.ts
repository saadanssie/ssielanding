// services/auth.service.ts

import { axiosInstance } from "@/lib/axios";

export const authService = {
  login: async () => {
    try {
      const response = await axiosInstance.post("/login/api/Login/Token");
      return response;
    } catch (error) {
      console.log("this is error", error);
    }
  },
};
