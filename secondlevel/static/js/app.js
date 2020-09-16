let tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Display the entire dataset as default

tableData.forEach((report) => {
    console.log(report);
    let row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        let cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button in the html file
let clickHandler = d3.select("#filter-btn");

//Click event
clickHandler.on("click", function() {

//Remove existing table
d3.select("tbody").html("");

//Prevent page from refreshing
d3.event.preventDefault();

// Get the value property of the input elements and set all text to lowercase
let dateTime = d3.select("#datetime").property("value");

let selectedCountry = d3.select("#country").property("value").toLowerCase();

let selectedState = d3.select("#state").property("value").toLowerCase();

let selectedCity = d3.select("#city").property("value").toLowerCase();

let selectedShape = d3.select("#shape").property("value").toLowerCase();

// initialize tableData as filteredData
filteredData = tableData;

if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (selectedCountry) {
    filteredData = filteredData.filter(record => record.country === selectedCountry);
}
if (selectedState) {
    filteredData = filteredData.filter(record => record.state === selectedState);
}
if (selectedCity) {
    filteredData = filteredData.filter(record => record.city === selectedCity);
}
if (selectedShape) {
    filteredData = filteredData.filter(record => record.shape === selectedShape);
}

// Display the filtered dataset

filteredData.forEach((report) => {
    let row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        let cell = row.append('td');
        cell.text(value);
    });
});
});
