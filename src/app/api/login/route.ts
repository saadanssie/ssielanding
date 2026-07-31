// app/api/login/route.ts
import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import { axiosInstance } from "@/lib/axios";

export async function POST() {
  try {
    const res = await axiosInstance.post("/login/api/Login/Token");
    return NextResponse.json(res.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Backend Error:", error.response?.data || error.message);
      return NextResponse.json(
        { error: error.response?.data || "Invalid credentials" },
        { status: error.response?.status || 401 }
      );
    }
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// export async function getAllProducts() {
//   try {
//     const res = await axiosInstance.get("/product/api/product/get-all-products");
//     return NextResponse.json(res.data);
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.error("Backend Error:", error.response?.data || error.message);
//       return NextResponse.json(
//         { error: error.response?.data || "Invalid credentials" },
//         { status: error.response?.status || 401 }
//       );
//     }
//     console.error("Internal Server Error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
// app/api/products/route.ts

export async function Login() {
  const res = await fetch(
    `https://login.microsoftonline.com/924d9ad1-25b5-46e1-beb4-612c790f213b/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "43bd0b39-1d06-4551-b74e-601a228f7df7",
        client_secret: process.env.AZURE_AD_CLIENT_SECRET!,
        scope: `api://fcf5140f-54b4-475c-a133-b7b53191e3ca/.default`,
      }),
    }
  );

  const data = await res.json();
  return Response.json(data);
}


