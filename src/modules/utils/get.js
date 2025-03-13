export default async function get(url) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error("Error:", error);
        return { error: error.message };
    }
}
