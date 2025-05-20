import axios, { AxiosResponse } from "axios";
import { baseUrl } from "./env";

// Utility function to retrieve the token (from localStorage)
const getToken = (): string => {
  const storedToken = localStorage.getItem("token");
  return storedToken ? JSON.parse(storedToken) : "";
};

// Define a generic response type
type ApiResponse<T = any> = Promise<T>;

// HTTP utility
const http = {
  post: <T = any>(path: string, body: object): ApiResponse<T> => {
    return new Promise(async (resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      };

      try {
        const res: AxiosResponse<T> = await axios.post(`${baseUrl}/${path}`, body, { headers });
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  },

  get: <T = any>(path: string): ApiResponse<T> => {
    return new Promise(async (resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      };

      try {
        const res: AxiosResponse<T> = await axios.get(`${baseUrl}/${path}`, { headers });
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  },

  postFormData: <T = any>(path: string, body: FormData): ApiResponse<T> => {
    return new Promise(async (resolve, reject) => {
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getToken()}`,
      };

      try {
        const res: AxiosResponse<T> = await axios.post(`${baseUrl}/${path}`, body, { headers });
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  },

  delete: <T = any>(path: string): ApiResponse<T> => {
    return new Promise(async (resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      };

      try {
        const res: AxiosResponse<T> = await axios.delete(`${baseUrl}/${path}`, { headers });
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  },

  patch: <T = any>(path: string, body: object): ApiResponse<T> => {
    return new Promise(async (resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      };

      try {
        const res: AxiosResponse<T> = await axios.patch(`${baseUrl}/${path}`, body, { headers });
        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  },
};

export default http;
