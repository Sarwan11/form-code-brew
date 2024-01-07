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
var isEditMode = false;
function v() {
  var username = document.getElementById("name");
  var mail = document.getElementById("email").value;
  var password = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  var isValid = true;

  if (username.value.trim() == "") {
    document.getElementById("user").innerHTML =
      "Please fill the name of the user.";
    isValid = false;
  } else {
    document.getElementById("user").innerHTML = "";
  }
  if (mail == "") {
    document.getElementById("emailErr").innerHTML =
      " please fill the email box.";
    isValid = false;
  } else {
    document.getElementById("emailErr").innerHTML = "";
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
  }

  if (cpassword.value == "") {
    document.getElementById("cpass").innerHTML = "please fill the cpassword";
    isValid = false;
  } else if (password.value !== cpassword.value) {
    document.getElementById("cpass").innerHTML = "Password does not match";
    isValid = false;
  } else {
    document.getElementById("cpass").innerHTML = "";
  }

  if (startDate == "") {
    document.getElementById("validationResult1").innerText =
      "Please enter a start date first!";
    isValid = false;
  } else {
    document.getElementById("validationResult1").innerText = "";
  }

  if (endDate == "") {
    document.getElementById("validationResult2").innerText =
      "Please enter an end date!";
    isValid = false;
  } else {
    document.getElementById("validationResult2").innerText = "";
  }
  // console.log(isEditMode,"hey there");
  if (isValid) {
    if (isEditMode) {
      var updatedName = document.getElementById("name").value;
      var updatedMail = document.getElementById("email").value;
      var updatedStartDate = document.getElementById("startDate").value;
      var updatedEndDate = document.getElementById("endDate").value;

      var tableRows = document.querySelectorAll("#tableBody tr");
      tableRows.forEach(function (row) {
        var emailCell = row.querySelector("td:nth-child(2)");
        if (emailCell.innerText === mail) {
          row.cells[0].innerText = updatedName;
          row.cells[1].innerText = updatedMail;
          row.cells[2].innerText = updatedStartDate;
          row.cells[3].innerText = updatedEndDate;
          console.log("hii iam in ");

          var index = emailarray.indexOf(mail);
          if (index !== -1) {
            emailarray[index] = updatedMail;
            document.getElementById("form").reset();
          }
          isEditMode = false;
        }
      });
    } else {
      if (emailarray.includes(mail)) {
        alert("email is not valid.");
      } else {
        addvalue(username.value, mail, startDate, endDate);
        alert("You have successfully registered.");
        document.getElementById("form").reset();
      }
    }
  }
}
var emailarray = [];

function addvalue(naam, mail, startDate, endDate) {
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  var editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("edit-button");
  var tbody = document.querySelector("#tableBody");

  deleteButton.onclick = function () {
    var row = this.parentNode.parentNode;
    console.log(row);

    var emailValue = row.childNodes[1].innerText;
    emailarray = emailarray.filter((email) => email !== emailValue);
    row.remove();

    // console.log(emailValue)
  };
  editBtn.onclick = function () {
    document.getElementById("name").value = naam;
    document.getElementById("email").value = mail;
    document.getElementById("startDate").value = startDate;
    document.getElementById("endDate").value = endDate;

    isEditMode = true;
  };

  var tr = document.createElement("tr");
  var td1 = tr.appendChild(document.createElement("td"));
  var td2 = tr.appendChild(document.createElement("td"));
  var td3 = tr.appendChild(document.createElement("td"));
  var td4 = tr.appendChild(document.createElement("td"));
  var td5 = tr.appendChild(document.createElement("td"));
  var td6 = tr.appendChild(document.createElement("td"));
  var td7 = tr.appendChild(document.createElement("td"));
  emailarray.push(mail);

  td1.innerHTML = naam;
  td2.innerHTML = mail;
  td3.innerHTML = startDate;
  td4.innerHTML = endDate;
  td5.appendChild(deleteButton);
  td6.innerHTML = `<input type="checkbox" id="checkbox" name="mycheckBox"></input>`;
  td7.appendChild(editBtn);
  document.getElementById("tableBody").appendChild(tr);
}
function addDummy() {
  document.getElementById("name").value = "Sarwan";
  document.getElementById("email").value = "sarwan@mailinator.com";
  document.getElementById("startDate").value = "2024-12-12";
  document.getElementById("endDate").value = "2024-12-13";
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
