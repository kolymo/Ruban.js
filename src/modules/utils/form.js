import { sanis, sanil, sanin } from './sanitize.js';


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

            if (window.RubanConfig.debug) {
                console.log('Constructor', this.element);
            }

            
            this.element.addEventListener('submit', function (event) {
                event.preventDefault();
                (window.RubanConfig.debug) ? console.log('Constructor Form Submission Prevented') : null;

                
            });
        }

        getLabelText(index = 0) {
            const inputs = this.element.querySelectorAll("input, select, textarea");
            if (index >= inputs.length) return null;

            const inputName = inputs[index].name;
            if (!inputName) return null;

            const label = this.element.querySelector(`label[for="${inputName}"]`);
            return label ? label.innerText : null;
        }

        async post({ data = {}, options = { csrf: true, textOnly: false }, url = window.location.href } = {}) {

            // Convert form data into an object if not passed
            if (Object.keys(data).length === 0) {
                data = new FormData(this.element);
                // Iterate over FormData entries and convert to object
                //data = Object.fromEntries(data.entries());
                // Sanitize each input value
                data = Object.fromEntries(
                    Array.from(data.entries()).map(([key, value]) => [
                        key,
                        options.textOnly ? sanis(value) : value,
                    ])
                );
            }

            // TODO: Check if there was already one in the formData
            // Check for CSRF token
            let csrfToken = document.querySelector('meta[name="csrf-token"]')?.content || 
            document.querySelector('input[name*="csrf"]')?.value;

            if (!csrfToken && options.csrf) {
            throw new Error("CSRF token not found.");
            }


            // Headers
            const headers = {
                "Content-Type": "application/json",
                ...(options.csrf && csrfToken ? { "X-CSRF-Token": csrfToken } : {}),
            };

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data),
                    credentials: "include"
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

        populateForm(data) {
            for (let key in data) {
                const field = this.element.querySelector(`[name="${key}"]`);
                field ? field.value = data[key] : null;
            }
        }
    }

    return new FormElement(object);
}