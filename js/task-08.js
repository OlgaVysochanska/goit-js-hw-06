const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    };

    if (Object.values(formData).includes("")) {
        alert("Ей, заповни поля! :)");
    }

    console.log(formData);
    form.reset();
}