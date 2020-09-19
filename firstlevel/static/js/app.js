// from data.js
let tableData = data;

// Creating References
//pulling out the date from the body tags
let $tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let pulledDate = d3.select("#datetime");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




// Inputing the data into the HTML
// goes through all of the columns and rows and inputs into a new variable
let newData = (dataInput) => {
    dataInput.forEach(filteredSightings => {let row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(filteredSightings[column])
        )
    });
}

newData(tableData);
console.log(newData);

// Creating an Event Listener for the Button
// Setting up the Filter Button for the date
button.on("click", () => {

    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
//removes whitespace
    let addedDate = pulledDate.property("value");
    // create a new variable
    //new variable will load the new filtered data to the page
   
    let filteredDate = tableData.filter(tableData => tableData.datetime === addedDate);
    console.log(filteredDate);
    
    $tbody.html("");

    let response = {
        filteredDate
    }
// add the filtered data to the page
    if(response.filteredDate.length !== 0) {
        newData(filteredDate);
    }

    // message will appear if the data you filtered does no appear
        else {
            $tbody.append("tr").append("td").text("No UFO Sightings");
        }
})
