export default function form(object) {
    class FormElement {
        constructor(object) {
            this.element = document.getElementById(object);

            if (!this.element) {
                throw new Error(`Element not found: ${object}`);
            }

            if (this.element.tagName !== "FORM") {
                throw new Error("Element is not a form.");
            }
        }

        async post(url, data = {}) {
            // Convert form data into an object if not passed
            if (Object.keys(data).length === 0) {
                data = new FormData(this.element);
                // Iterate over FormData entries and convert to object
                data = Object.fromEntries(data.entries());
            }

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(
                        `Request failed with status: ${response.status}`
                    );
                }

                const responseData = await response.json();

                return responseData;
                
            } catch (error) {
                console.error("Error during form submission:", error);
                return { error: error.message };
            }
        }

        async get(url, params = {}) {
            try {
                // Construct query string from params object
                const queryString = new URLSearchParams(params).toString();
                const fullUrl = `${url}?${queryString}`;

                const response = await fetch(fullUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Request failed with status: ${response.status}`
                    );
                }

                const responseData = await response.json();

                // Automatically populate the form with the retrieved data
                this.populateForm(responseData);

                return responseData;
            } catch (error) {
                console.error("Error during GET request:", error);
                return { error: error.message };
            }
        }

        populateForm(data) {
            for (let key in data) {
                const field = this.element.querySelector(`[name="${key}"]`);
                field ? field.value = data[key] : null;
            }
        }
    }

    return new FormElement(object);
}
