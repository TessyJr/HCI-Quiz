function validateName() {
  let name = document.querySelector("#name");
  let nameLabel = document.querySelector("label[for='name']");
  let nameValue = name.value;

  if (name.value == "" || nameValue.length < 3) {
    name.style.borderColor = "red";
    nameLabel.style.color = "red";
  } else {
    name.style.borderColor = "green";
    nameLabel.style.color = "green";
  }
}

function validateEmail() {
  let email = document.querySelector("#email");
  let emailValue = email.value;
  let emailLabel = document.querySelector("label[for='email'");
  let counter = 0;

  for (let i = 0; i < emailValue.length; i++) {
    if (emailValue[i] == "@") {
      counter = 1;
      break;
    }
  }
  if (counter == 0) {
    email.style.borderColor = "red";
    emailLabel.style.color = "red";
  } else {
    email.style.borderColor = "green";
    emailLabel.style.color = "green";
  }
}

function validateMessage() {
  let message = document.querySelector("#message");
  let messageLabel = document.querySelector("label[for='message']");
  let messageValue = message.value;

  if (message.value == "" || messageValue.length < 5) {
    message.style.borderColor = "red";
    messageLabel.style.color = "red";
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
