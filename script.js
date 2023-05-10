var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["FirstName"] = document.getElementById("FirstName").value;
  formData["LastName"] = document.getElementById("LastName").value;
  formData["Email"] = document.getElementById("Email").value;
  formData["CollegeName"] = document.getElementById("CollegeName").value;
  formData["Admission"] = document.getElementById("Admission").value;
  formData["Age"] = document.getElementById("Age").value;
  formData["Gender"] = document.getElementById("Gender").value;
  formData["Course"] = document.getElementById("Course").value;
  formData["Otherinfo"] = document.getElementById("Otherinfo").value;
 return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.FirstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.LastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.CollegeName;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.Admission;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.Age;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.Gender;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.Course;
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.Otherinfo;
                    `<button onClick="onEdit(this)">Edit</button> 
                    <button onClick="onDelete(this)">Delete</button>;`
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("FirstName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("LastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("CollegeName").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Admission").value = selectedRow.cells[4].innerHTML;
  document.getElementById("Age").value = selectedRow.cells[5].innerHTML;
  document.getElementById("Gender").value = selectedRow.cells[6].innerHTML;
  document.getElementById("Course").value = selectedRow.cells[7].innerHTML;
  document.getElementById("Otherinfo").value = selectedRow.cells[8].innerHTML;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.FirstName;
  selectedRow.cells[1].innerHTML = formData.LastName;
  selectedRow.cells[2].innerHTML = formData.Email;
  selectedRow.cells[3].innerHTML = formData.CollegeName;
  selectedRow.cells[4].innerHTML = formData.Admission;
  selectedRow.cells[5].innerHTML = formData.Age;
  selectedRow.cells[6].innerHTML = formData.Gender;
  selectedRow.cells[7].innerHTML = formData.Course;
  selectedRow.cells[8].innerHTML = formData.Otherinfo;

}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("FirstName").value = "";
  document.getElementById("LastName").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("CollegeName").value = "";
  document.getElementById("Admission").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("Gender").value = "";
  document.getElementById("Course").value = "";
  document.getElementById("otherinfo").value = "";

  selectedRow = null;
}