const BASE_URL = process.env.API_URL || "http://localhost:5000/api";

const apiRequest = async (endpoint, method = "GET", data = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  // Send the API request and parse the response
  const response = await fetch(BASE_URL + endpoint, options);
  const responseData = response.ok ? await response.json() : undefined;

  return responseData;
};

export default apiRequest;
