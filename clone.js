
function showForm() {

  overlay.style.display = 'block';
  popupForm.style.display = "block";
  }

function closeForm() {
  
  overlay.style.display = 'none';
  popupForm.style.display = "none";
}
  
  function changeEmail(event) {
    event.preventDefault();
    const phoneInput = document.getElementById("phoneInput");
    const phoneLabel = document.getElementById("phoneText");
    const changeEmail = document.getElementById("emailButton");

    if (phoneInput.name === "phone") {
      phoneInput.name = "email";
      phoneLabel.textContent = "Email";
      changeEmail.textContent = "Use phone instead";

    } else {
      phoneInput.name = "phone";
      phoneLabel.textContent = "Phone";
      changeEmail.textContent = "Use email instead";
    }
  };

  function error() {
    const nameInput = document.getElementById(nameInput);

    if(nameInput === "") {
      nameInput.classList.add("errorBorder");
    }
  }