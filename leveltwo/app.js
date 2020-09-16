

// Create a copy of the data
let tableData = data;

let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#datetime");
let $stateInput = document.querySelector("#state");
let $cityInput = document.querySelector("#city");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");
let $searchBtn = document.querySelector("#search");
let $resetBtn = document.querySelector("#reset");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Add an event listener to the resetButton, call handleResetButtonClick when clicked
$resetBtn.addEventListener("click", handleResetButtonClick);

// Build table with non-filtered data
function renderTable() {
  $tbody.innerHTML = "";
  for (let i = 0; i < tableData.length; i++) {
    // Get current address object and fields
    let address = tableData[i];
    console.log(address)
    let fields = Object.keys(address);
    // Create new row in tbody, set index to be i + startingIndex
    let $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For each field in address object, create new cell and set inner text to be current value at current address field
      let field = fields[j];
      let $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// Build search table for filtered data
function handleSearchButtonClick() {
  let filterDate = $dateInput.value;
  let filterState = $stateInput.value.trim().toLowerCase();
  let filterCity = $cityInput.value.trim().toLowerCase();
  let filterCountry = $countryInput.value.trim().toLowerCase();
  let filterShape = $shapeInput.value.trim().toLowerCase();

  // Filter on date
  if (filterDate != "") {
    tableData = data.filter(function (address) {
      let addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };

  // Filter on state
  if (filterState != "") {
    tableData = tableData.filter(function (address) {
      let addressState = address.state;
      return addressState === filterState;
    });
  }
  else { tableData };

  // Filter on city
  if (filterCity != "") {
    tableData = tableData.filter(function (address) {
      let addressCity = address.city;
      return addressCity === filterCity;
    });
  }
  else { tableData };

  // Filter on country
  if (filterCountry != "") {
    tableData = tableData.filter(function (address) {
      let addressCountry = address.country;
      return addressCountry === filterCountry;
    });
  }
  else { tableData };

  // Filter on shape
  if (filterShape != "") {
    tableData = tableData.filter(function (address) {
      let addressShape = address.shape;
      return addressShape === filterShape;
    });
  }
  else { tableData };

  renderTable();
}

// Clear all the fields
function handleResetButtonClick(){
  renderTable();
}

// Render the table for the first time on page load
renderTable();