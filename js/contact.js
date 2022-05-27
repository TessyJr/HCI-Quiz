function validateName() {
  let name = document.querySelector("#name");
  let nameLabel = document.querySelector("label[for='name']");
  let nameValue = name.value;

  if (name.value == "" || nameValue.length < 3) {
    name.style.borderColor = "red";
    nameLabel.style.color = "red";

    name.classList.add("error");
    nameLabel.classList.add("error");
    setTimeout(() => {
      name.classList.remove("error");
      nameLabel.classList.remove("error");
    }, 500);
  } else {
    name.style.borderColor = "green";
    nameLabel.style.color = "green";
  }
}

function validateEmail() {
  let email = document.querySelector("#email");
  let emailValue = email.value;
  let emailLabel = document.querySelector("label[for='email'");

  if (emailValue.indexOf("@") != -1 && emailValue.endsWith(".com")) {
    email.style.borderColor = "green";
    emailLabel.style.color = "green";
  } else {
    email.style.borderColor = "red";
    emailLabel.style.color = "red";

    email.classList.add("error");
    emailLabel.classList.add("error");
    setTimeout(() => {
      email.classList.remove("error");
      emailLabel.classList.remove("error");
    }, 500);
  }
}

function validateMessage() {
  let message = document.querySelector("#message");
  let messageLabel = document.querySelector("label[for='message']");
  let messageValue = message.value;

  if (message.value == "" || messageValue.length < 5) {
    message.style.borderColor = "red";
    messageLabel.style.color = "red";

    message.classList.add("error");
    messageLabel.classList.add("error");
    setTimeout(() => {
      message.classList.remove("error");
      messageLabel.classList.remove("error");
    }, 500);
  } else {
    message.style.borderColor = "green";
    messageLabel.style.color = "green";
  }
}

function validateForm(e) {
  e.preventDefault();
  validateName();
  validateEmail();
  validateMessage();

  let form = document.querySelector("#contactForm");

  let nameLabel = document.querySelector("label[for='name']");
  let emailLabel = document.querySelector("label[for='email'");
  let messageLabel = document.querySelector("label[for='message'");

  if (
    nameLabel.style.color == "green" &&
    emailLabel.style.color == "green" &&
    messageLabel.style.color == "green"
  ) {
    form.submit();
  }
}
