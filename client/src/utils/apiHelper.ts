import axios, { type AxiosRequestConfig, type Method } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const apiRequest = async <T = any>(
  endpoint: string,
  method: HttpMethod = "GET",
  data: Record<string, unknown> | null = null,
): Promise<T> => {
  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const options: AxiosRequestConfig = {
    method: method as Method,
    url: `${BASE_URL}${endpoint}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(options);
    return response.data as T;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Axios error: Network or JSON response error");
    }
    throw new Error("Network response was not okay");
  }
};

export default apiRequest;
