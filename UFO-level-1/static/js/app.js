// from data.js
let tableData = data;

// create a loop function to append data into the table #ufo-table
let tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        Object.values(dataRow).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

// create a handler function that filters the input date
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // if a date is entered, filter the table by that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // new filtered data is shown based on input date
    buildTable(filteredData);
}

// create an event to listen for action on form's button
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
