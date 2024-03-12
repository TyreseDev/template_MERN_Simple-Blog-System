const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// You might want to create a type for the method parameter to restrict it to valid HTTP methods
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// You can also define a generic type for the response to make apiRequest reusable and adaptable to different types of data
// T could be any type you expect from different endpoints. Use any as a fallback if the type is not provided
const apiRequest = async <T = any>(
  endpoint: string,
  method: HttpMethod = "GET",
  data: Record<string, unknown> | null = null, // Use a more specific type if you know the structure of your data
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

  // Send the API request
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  // Decide what to do based on the response status
  if (!response.ok) {
    throw new Error("Network response was not ok"); // Or handle errors appropriately for your app
  }

  // Parse the JSON response. Wrap it in a try...catch to handle parsing errors.
  try {
    const responseData: T = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Failed to parse JSON response");
  }
};

export default apiRequest;
