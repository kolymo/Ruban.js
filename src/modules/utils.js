export function $_(object) {

    class DOMElement {

        constructor(object) {
            if (object[0] === "#") {
                this.element = document.getElementById(object.slice(1));
            } else {
                this.element = document.querySelector(object);
            }

            if (!this.element) {
                throw new Error(`Element not found: ${object}`);
            }
        }

        // Method to get the inner text of the element
        getText() {
            return this.element.innerText;
        }

        // Method to set the inner text of the element
        setText(text) {
            this.element.innerText = text;
        }

        // Method to get the element's value (for inputs, etc.)
        getValue() {
            return this.element.value;
        }

        // Method to set the element's value (for inputs, etc.)
        setValue(value) {
            this.element.value = value;
        }

        // Method to add a class to the element
        addClass(className) {
            this.element.classList.add(className);
        }

        // Method to remove a class from the element
        removeClass(className) {
            this.element.classList.remove(className);
        }

        // Method to add an event listener to the element
        on(event, callback) {
            this.element.addEventListener(event, callback);
        }

        // Method to handle POST request for forms (AJAX)
        async post(url, data = {}) {
            if (this.element.tagName === 'FORM') {
                // Convert form data into an object if not passed
                if (Object.keys(data).length === 0) {
                    data = new FormData(this.element);
                    data = Object.fromEntries(data.entries());
                }

                try {
                    // Send data using fetch
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });

                    if (!response.ok) {
                        throw new Error(`Request failed with status: ${response.status}`);
                    }

                    const responseData = await response.json();
                    return responseData;

                } catch (error) {
                    console.error('Error during form submission:', error);
                    return { error: error.message };
                }
            } else {
                throw new Error('Element is not a form.');
            }
        }
    }

    // Return an instance of DOMElement
    return new DOMElement(object);
}
