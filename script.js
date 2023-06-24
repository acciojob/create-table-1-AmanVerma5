function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");
  var newRow = table.insertRow(0); // Insert row at the top

  var cell1 = newRow.insertCell(0); // Insert left cell
  var cell2 = newRow.insertCell(1); // Insert right cell

  cell1.innerHTML = "New Cell1"; // Set value for left cell
  cell2.innerHTML = "New Cell2"; // Set value for right cell
  
}
