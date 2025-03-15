import { NetworkError, TimeoutError } from "./errors";

export async function get(url, options = {}) {
    const { timeout = 7500, secretKey } = options;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const {
        headers = {},
        queryParams = {},
        includeCredentials = false,
    } = options;

    try {
        // Validate URL
        if (!url || typeof url !== "string") {
            throw new Error("Invalid URL provided.");
        }

        // Append query parameters to the URL
        const urlWithParams = new URL(url);
        Object.entries(queryParams).forEach(([key, value]) => {
            urlWithParams.searchParams.append(key, value);
        });

        // Add secret key to headers if provided
        if (secretKey) {
            headers["Authorization"] = `Bearer ${secretKey}`;
        }

        // Make the request
        const response = await fetch(urlWithParams.toString(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...headers, // Merge custom headers (including secret key)
            },
            credentials: includeCredentials ? "include" : "omit",
            signal: controller.signal,
        });

        // Clear the timeout
        clearTimeout(timeoutId);

        // Check for HTTP errors
        if (!response.ok) {
            throw new NetworkError(`Request failed with status: ${response.status}`);
        }

        // Parse and return the response data
        const responseData = await response.json();
        return responseData;

    } catch (error) {
        if (error instanceof NetworkError) {
            console.error("Network error:", error.message);
        } else if (error instanceof TimeoutError) {
            console.error("Timeout error:", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        throw error;
    }
}