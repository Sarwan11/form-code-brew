function sdate() {
  var sd = document.getElementById("startDate").value;
  document.getElementById("endDate").min = sd;
}

function edate() {
  var ed = document.getElementById("endDate").value;
  document.getElementById("startDate").max = ed;
}
function clearTable() {
  var tableBody = document.getElementById("tableBody");

  tableBody.innerHTML = "";
  emailarray = [];
}
function v() {
  var username = document.getElementById("name");
  var mail = document.getElementById("email").value;
  var password = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");
  var startDate = document.getElementById("startDate").value;
  var endDateInput = document.getElementById("endDate").value;
  var isValid = true;

  if (username.value.trim() == "") {
    document.getElementById("user").innerHTML =
      "Please fill the name of the user";
    isValid = false;
  } else {
    document.getElementById("user").innerHTML = "";
    isValid = true;
  }
  if (mail == "") {
    document.getElementById("emailErr").innerHTML =
      " please fill the email box.";
    isValid = false;
  } else {
    document.getElementById("emailErr").innerHTML = "";
    isValid = true;
  }
  if (password.value == "") {
    document.getElementById("err").innerHTML = " please fill the password box.";
    isValid = false;
  } else if (typeof (password.value * 2) != "number") {
    document.getElementById("err").innerHTML = "Only numbers allowed";
    console.log(password.value * 2);
    isValid = false;
  } else {
    document.getElementById("err").innerHTML = "";
    isValid = true;
  }
  if (cpassword.value == "") {
    document.getElementById("cpass").innerHTML = "please fill the cpassword";
    isValid = false;
  } else if (password.value !== cpassword.value) {
    document.getElementById("cpass").innerHTML = "Password does not match";
    isValid = false;
  } else {
    document.getElementById("cpass").innerHTML = "";
    isValid = true;
  }
  if (startDate == "") {
    document.getElementById("validationResult1").innerText =
      "Please enter a start date first!";
    isValid = false;
  } else {
    document.getElementById("validationResult1").innerText = "";
    isValid = true;
  }
  if (endDateInput == "") {
    document.getElementById("validationResult2").innerText =
      "Please enter an end date!";
    isValid = false;
  } else {
    document.getElementById("validationResult2").innerText = "";
    isValid = true;
  }
  if (isValid) {
    if (emailarray.includes(mail)) {
      alert("email is not valid.");
    } else {
      addvalue(username.value, mail, startDate, endDateInput);
      alert("You have successfully registered.");
    }
  }
}
var emailarray = [];

function addvalue(naam, mail, startDate, endDateInput) {
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  var tbody = document.querySelector("#tableBody");

  console.log(tbody);

  deleteButton.onclick = function () {
    var row = this.parentNode.parentNode;
    console.log(row);

    var emailValue = row.childNodes[1].innerText;
    emailarray = emailarray.filter((email) => email !== emailValue);
    row.remove();

    // console.log(emailValue)
  };

  var tr = document.createElement("tr");
  var td1 = tr.appendChild(document.createElement("td"));
  var td2 = tr.appendChild(document.createElement("td"));
  var td3 = tr.appendChild(document.createElement("td"));
  var td4 = tr.appendChild(document.createElement("td"));
  var td5 = tr.appendChild(document.createElement("td"));
  var td6 = tr.appendChild(document.createElement("td"));
  emailarray.push(mail);

  td1.innerHTML = naam;
  td2.innerHTML = mail;
  td3.innerHTML = startDate;
  td4.innerHTML = endDateInput;
  td5.appendChild(deleteButton);
  td6.innerHTML = `<input type="checkbox" id="checkbox" name="mycheckBox"></input>`;
  document.getElementById("tableBody").appendChild(tr);
}
function deleteSelected() {
  var checkBoxes = document.querySelectorAll(
    "input[name='mycheckBox']:checked"
  );

  checkBoxes.forEach((checkBox) => {
    let deleteRow = checkBox.parentElement.parentElement;
    let emailValue = deleteRow.childNodes[1].innerText;

    emailarray = emailarray.filter((email) => email !== emailValue);

    deleteRow.remove();
  });
}
