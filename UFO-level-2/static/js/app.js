// from data.js
let tableData = data;

// create a loop function to append data into the table #ufo-table
let tbody = d3.select("tbody");

// using the same loop function from the first UFO level-1 to input the data into web table
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

// create space to hold the filters
let filters = {};

// create a function save the form's changed input(s) elements, values, and ids
function updateFilters() {
    let changedElement = d3.select(this).select("input");
    let elementValue = changedElement.property("value");
    let filteredId = changedElement.attr("id");

    // if an element is entered, then filter by that input(s) and create a filtered Table
    // otherwise, no entry, no filtered table
    if (elementValue) {
        filters[filteredId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
    filterTable();
}

// create a loop function that displays a filtered table based on the inputs
function filterTable() {
    let filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });
    buildTable(filteredData);
}

// In order to filter the data on the input form, tell computer to listen for an event change
d3.selectAll(".filter").on("change", updateFilters);

// Table is displayed
buildTable(tableData);