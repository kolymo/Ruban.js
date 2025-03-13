export default function $_(object) {
    
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

        // Method to get the label text of the element
        getLabelText(index = 0) {
            const inputName =
                this.element.name ||
                this.parentElement.querySelectorAll("input, select, textarea")[
                    index
                ].name;
            if (!inputName) return null;

            const label = this.element
                .closest("form")
                ?.querySelector(`label[for="${inputId}"]`);

            return label ? label.innerText : null;
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

    }

    return new DOMElement(object);
}