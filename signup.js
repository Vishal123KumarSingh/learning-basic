function validateForm() {
  let x = document.forms["MYFORM"]["firstname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
