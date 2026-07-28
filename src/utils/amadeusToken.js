export const getAmadeusToken = async () => {
  const API_KEY = import.meta.env.VITE_AMADEUS_API_KEY;
  const API_SECRET = import.meta.env.VITE_AMADEUS_API_SECRET;

  try {
    // First check if we already have a valid token
    const existingToken = localStorage.getItem("amadeus_token");
    const expiry = localStorage.getItem("amadeus_token_expiry");

    if (existingToken && expiry && new Date().getTime() < expiry) {
      return existingToken; // ✅ Reuse valid token
    }

    // Otherwise request a new one
    const res = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: API_KEY,
        client_secret: API_SECRET,
      }),
    });

    const data = await res.json();

    if (data.access_token) {
      // Save token for re-use
      localStorage.setItem("amadeus_token", data.access_token);
      localStorage.setItem("amadeus_token_expiry", new Date().getTime() + data.expires_in * 1000);
      return data.access_token;
    } else {
      throw new Error("Failed to fetch access token");
    }
  } catch (error) {
    console.error("Amadeus Token Error:", error);
    return null;
  }
};
