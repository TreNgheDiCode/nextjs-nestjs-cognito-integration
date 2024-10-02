import axios, { AxiosInstance } from "axios";

class AxiosClient {
  private static _instance: AxiosInstance;

  private constructor() {
    // prevent Initialize axios instance from outside
  }

  public static getInstance(): AxiosInstance {
    if (!AxiosClient._instance) {
      AxiosClient._instance = axios.create({
        baseURL: "/api",
        timeout: 10_000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      // TODO: Add interceptors for request and response
    }

    return AxiosClient._instance;
  }
}

export const axiosClient = AxiosClient.getInstance();
