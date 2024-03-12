const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const apiRequest = async <T = any>(
  endpoint: string,
  method: HttpMethod = "GET",
  data: Record<string, unknown> | null = null,
): Promise<T> => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  try {
    const responseData: T = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Failed to parse JSON response");
  }
};

export default apiRequest;
