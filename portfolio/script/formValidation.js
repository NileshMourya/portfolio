const formValidation = function () {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const fname = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const textfield = document.getElementById("textfield").value;
      const subject = document.getElementById("subject").value;

      if (fname === "") {
        alert("Name required");
      } else if (textfield === "") {
        alert("Please Enter Message");
      } else if (subject === "") {
        alert("subject cannot be empty");
      } else if (email === "") {
        alert("Please enter valid E-mail");
      }

      clear();
    });
  });
};
formValidation();

//function responsible for clearing the form
function clear() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("textfield").value = "";
  document.getElementById("subject").value = "";
}
