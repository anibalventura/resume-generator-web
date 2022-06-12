window.onload = () => {
  // Show current year in footer.
  document.getElementById("current-year").innerHTML = new Date().getFullYear();
};

const formInputs = [
  document.getElementById("name"),
  document.getElementById("phone"),
  document.getElementById("address"),
  document.getElementById("email"),
  document.getElementById("web-page"),
  document.getElementById("summary"),
  document.getElementById("jobs"),
  document.getElementById("education"),
  document.getElementById("certifications"),
  document.getElementById("skills"),
  document.getElementById("languages"),
];

function generateResume() {
  if (validateForm()) {
    clearForm();
  } else {
    alert("Please fill all the required fields.");
  }
}

function validateForm() {
  let IsValid = true;

  formInputs.forEach((input) => {
    const inputValue = input.value;

    if (inputValue === "" || inputValue == null || inputValue == undefined) {
      input.classList.add("input-invalid");
      IsValid = false;
    } else {
      input.classList.remove("input-invalid");
    }
  });

  return IsValid;
}

function clearForm() {
  formInputs[0].focus();

  formInputs.forEach((input) => {
    input.value = "";
    input.classList.remove("input-invalid");
  });
}

function printResume() {
  //Get the HTML of div
  var divElements = document.getElementById("resume").innerHTML;
  //Get the HTML of whole page
  var oldPage = document.body.innerHTML;

  //Reset the page's HTML with div's HTML only
  document.body.innerHTML =
    "<html><head><title></title></head><body>" + divElements + "</body>";

  //Print Page
  window.print();

  //Restore original HTML
  document.body.innerHTML = oldPage;
}
