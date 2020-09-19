// from data.js
let tableData = data;

// Creating References
//pulling out the date from the body tags
let $tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let pulledDate = d3.select("#datetime");
let pulledCity = d3.select("#city");
let pulledState = d3.select("#state");
let pulledCountry = d3.select("#country");
let pulledShape = d3.select("#shape");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Inputing the data into the HTML
// goes through all of the columns and rows and inputs into a new variable
let newData = (dataInput) => {
    dataInput.forEach(filteredSightings => {
        let row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(filteredSightings[column])
        )
    });
}

newData(tableData);


// Creating an Event Listener for the Button
// Setting up the Filter Button for the date
button.on("click", () => {

    d3.event.preventDefault();
    
//removes whitespace
    let addedDate = pulledDate.property("value").trim();
    let addedCity = pulledCity.property("value").trim();
    let addedState = pulledState.property("value").trim();
    let addedCountry = pulledCountry.property("value").trim();
    let addedShape = pulledState.property("value").trim();
    // create a new variable
    //new variable will load the new filtered data to the page
   
    let filteredDate = tableData.filter(tableData => tableData.datetime === addedDate);
    let filteredCity = tableData.filter(tableData => tableData.city === addedCity);
    let filteredState = tableData.filter(tableData => tableData.state === addedState);
    let filteredCountry = tableData.filter(tableData => tableData.country === addedCountry);
    let filteredShape = tableData.filter(tableData => tableData.shape === addedShape);
    
    $tbody.html("");

    let response = {
        filteredDate,
        filteredCity,
        filteredState,
        filteredCountry,
        filteredShape
    }
// add the filtered data to the page
    if(response.filteredDate.length !== 0) {
        newData(filteredDate);
    }
	elif(response.filteredCity.length !== 0) {
        newData(filteredDate);
    }
    elif(response.filteredState.length !== 0) {
        newData(filteredDate);
    }
    elif(response.filteredCountry.length !== 0) {
        newData(filteredDate);
    }
    elif(response.filteredShape.length !== 0) {
        newData(filteredDate);
    }
    // message will appear if the data you filtered does no appear
        else {
            $tbody.append("tr").append("td").text("No UFO Sightings");
        }
})

