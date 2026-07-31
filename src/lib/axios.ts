import { getSession, signOut } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": "a3bc4fb5858348b286229cbccd6bac0a",
  },
});

// Add a request interceptor (e.g., for Auth Tokens)
axiosInstance.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const merchnatRegistrationAxiosInstance = axios.create({
  baseURL: "https://api-gateway-sbndev.azure-api.net",
  headers: {
    "Content-Type": "application/json",
    "ocp-apim-subscription-key": "72dc4e6f9a9c4bd2a63ee9552c5221df",
  },
});

merchnatRegistrationAxiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();
  config.headers.Authorization = `Bearer ${session?.accessToken}`;
  return config;
});

export const productInstance = axios.create({
  baseURL: "https://api-gateway-sbndev.azure-api.net",
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": "a3bc4fb5858348b286229cbccd6bac0a",
  },
});

productInstance.interceptors.request.use(async (config) => {
  const session = await getSession();
  config.headers.Authorization = `Bearer ${session?.accessToken}`;
  return config;
});

export const invoiceAxiosInstance = axios.create({
  baseURL: "https://api-gateway-sbndev.azure-api.net",
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": "1e334fd776b842a5b3142be5dcd55dff",
  },
});

invoiceAxiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();
  config.headers.Authorization = `Bearer ${session?.accessToken}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      await signOut({
        callbackUrl: "/", // or "/"
      });
    }

    return Promise.reject(error);
  },
);

merchnatRegistrationAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      await signOut({
        callbackUrl: "/", // or "/"
      });
    }

    return Promise.reject(error);
  },
);

productInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      await signOut({
        callbackUrl: "/", // or "/"
      });
    }

    return Promise.reject(error);
  },
);

invoiceAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      await signOut({
        callbackUrl: "/", // or "/"
      });
    }

    return Promise.reject(error);
  },
);
