import { ValidationError } from "./errors";

function getFormData(formElement) {
    const formData = new FormData(formElement);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    return formObject;
}

export default function secureForm(form) {
    // Setup legit version of form
    const originalForm = getFormData(form);
    console.log('Original form:', originalForm);

    // Listen for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formObject = getFormData(form);
        console.log('Form object:', formObject);

        // Compare all keys/name(inputs)
        const isFormSecure = Object.keys(formObject).every((key) => {

            return key in originalForm;
        });

        if (isFormSecure) {
            form.submit();
        } else {
            throw new ValidationError('Form is not secure!');
        }
    });
}