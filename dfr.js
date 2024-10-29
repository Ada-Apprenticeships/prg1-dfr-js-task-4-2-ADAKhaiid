const fs = require('fs'); 
// The neccessary file for this task
const inputFile = "datatrafficdataset_2000.csv";

function fileExists(filename) {
  // If the file exists 
  if (fs.existsSync(filename)) {
    return true
  }
  return false
}
  
function validNumber(value) { 
  const strValue = String(value);
  // Check if the string is a valid number using a regex
  const isNumber = /^-?\d+(\.\d+)?$/.test(strValue); // Alows any Integer or float, positive or negative
  return isNumber;
}

function dataDimensions(dataframe) {
  // Checks if the dataframe is not valid
  if (dataframe == null) {
    return [-1, -1];
  }

  // Checks for valid rows using a conditional statement 
  const rows = Array.isArray(dataframe) ? dataframe.length : -1;
  // Check for valid columns using a conditional statement 
  // Add "dataframe.length > 0" to know the dataset has at least one row
  // Add "Array.isArray(dataframe[0])" to know if it is a 2D array
  const columns = Array.isArray(dataframe) && dataframe.length > 0 && Array.isArray(dataframe[0]) 
                  ? dataframe[0].length : -1; // Use a Conditional Statement 
  // Return the array containing rows and columns             
  return [rows, columns];
}

function findTotal(dataset) {
  let total = 0;
  
  if (!Array.isArray(dataset) || (dataset.length > 0 && Array.isArray(dataset[0]))) {
    return 0; 
  }
  // Iterates through the values
  for (const item of dataset) {
    if (validNumber(item)) {
      // Turns the value into a number and adds it to the total
      total += parseFloat(item);
    }
  }
  return total;
}

function calculateMean(dataset) {
  let sum = 0;
  let count = 0;
  
  if (!Array.isArray(dataset) || (dataset.length > 0 && Array.isArray(dataset[0]))) {
    return 0; 
  }
   // Iterates through the values
  for (const item of dataset) {
    if (validNumber(item)) {
      // Converts the value to number and adds to sum
      sum += Number(item); 
      count++;
    }
  }

  // Uses a conditional statment to either output the mean or 0 
  return count > 0 ? sum / count : 0;
}

function calculateMedian(dataset) {
  if (!Array.isArray(dataset)) {
    return 0; 
  }
  // Create an array to store the valid numbers
  const validNumbers = [];
  
  // Loop through the array to collect valid numbers
  for (let i = 0; i < dataset.length; i++) {
    const numValue = Number(dataset[i]);
    if (!isNaN(numValue)) {
      validNumbers.push(numValue); // Adds the value to the array
    }
  }
  
  // If no values were added to the array
  if (validNumbers.length == 0) {
    return 0;
  }

  // Sorts the array into numerical order
  validNumbers.sort(function(a, b) {a - b});

  // Finds the middle number of the array's length
  const middle = Math.floor(validNumbers.length / 2);

  // If the number of valid numbers is odd
  if (validNumbers.length % 2 !== 0) {
    return validNumbers[middle]; // Return the middle value
  } 
  else {
  // If the number of valid numbers is even
  return (validNumbers[middle - 1] + validNumbers[middle]) / 2; // Returns the average of the two middle values
  } 
}

function convertToNumber(dataframe, col){ 
  let totalConversions = 0;
  // Goes through each value of the array
  for (let i = 0; i < dataframe.length; i++) {
    const value = dataframe[i][col];
    // Checks if the value is a string that can be converted to a number
    if (typeof value == 'string' && !isNaN(value)) {
      dataframe[i][col] = parseFloat(value);  // Converts to a float
      totalConversions++;  // Counts the total conversions
    }
  } 
  return totalConversions;
}

function flatten(dataframe) {
  // Gets the column names from the first row
  const column = Object.keys(dataframe[0]); 

  // Checks if the dataframe has the column and it contains only one column
  if (dataframe.hasOwnProperty(column) && column.length === 1) {
    const values = []; // Creates an array to hold the column values

    // Collects the values from the columns of all the rows
    for (var i = 0; i < dataframe.length; i++) {
      values.push(dataframe[i][column]); // Pushes the value of the specified column
    }
    // Returns the collected values
    return values; 
  }
  // Return an empty array if the structure is invalid
  return []; 
}

function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}

function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}

module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToNumber, flatten, 
  loadCSV, calculateMedian, createSlice,
} 