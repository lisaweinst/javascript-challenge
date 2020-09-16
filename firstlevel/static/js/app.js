// from data.js
let tableData = data;




// Viewing the available data fromt he data.js
// console.log(tableData);


// Creating References
let $tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputFieldDate = d3.select("#datetime");
let inputFieldCity = d3.select("#city");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




// Inputing the data into the HTML
let addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        let row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    

    let inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // https://www.w3schools.com/jsref/jsref_tolowercase.asp
    // var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)
    // var inputState = inputFieldState.property("value").toLowerCase().trim();
    // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    // var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    

    let filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top if only works for filtering the date
    
        else {
            $tbody.append("tr").append("td").text("There was no UFO sightings");
        }
})
