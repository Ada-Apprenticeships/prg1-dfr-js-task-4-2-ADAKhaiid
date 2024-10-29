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
  const isPositiveInteger = /^-?\d+(\.\d+)?$/.test(strValue);
  return isPositiveInteger;
}

function dataDimensions(dataframe) {
  // Checks if the dataframe is valid
  if (dataframe == null) {
    return [-1, -1];
  }

  // Checks for valid rows using a conditional statement 
  const rows = Array.isArray(dataframe) ? dataframe.length : -1;
  // Check for valid columns using a conditional statement 
  // We add "&& dataframe.length > 0" to know the dataset has at least one row
  // We add "&& Array.isArray(dataframe[0])" to know if it is a 2D array
  const columns = Array.isArray(dataframe) && dataframe.length > 0 && Array.isArray(dataframe[0]) 
                  ? dataframe[0].length : -1;
  // Return the array containing rows and columns             
  return [rows, columns];
}

function calculateMean(dataset) {
  let sum = 0;
  let count = 0;
  
  if (!Array.isArray(dataset) || (dataset.length > 0 && Array.isArray(dataset[0]))) {
    return 0; 
  }

  for (const item of dataset) {
    if (validNumber(item)) {
        sum += Number(item);
        count++;
    }
  }
  return count > 0 ? sum / count : 0;
}

function findTotal(dataset) {
  let total = 0;
  
  if (!Array.isArray(dataset) || (dataset.length > 0 && Array.isArray(dataset[0]))) {
    return 0; 
  }

  for (const item of dataset) {
    if (validNumber(item)) {
        total += parseFloat(item);
    }
  }
  return total;
}


function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  
}


function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  
}


function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}


function calculateMedian(dataset) {
  if (!Array.isArray(dataset)) {
    return 0; 
  }

  const validNumbers = [];
  
  // Loop through the array to collect valid numbers
  for (let i = 0; i < dataset.length; i++) {
    const numValue = Number(dataset[i]);
    if (!isNaN(numValue)) {
      validNumbers.push(numValue);
    }
  }
  
  if (validNumbers.length === 0) {
    return 0;
  }

  validNumbers.sort(function(a, b) {
    return a - b;
  });

  const middle = Math.floor(validNumbers.length / 2);

  // If the number of valid numbers is odd
  if (validNumbers.length % 2 !== 0) {
    return validNumbers[middle]; // Return the middle value
  } 
  else {
  // If the number of valid numbers is even
  return (validNumbers[middle - 1] + validNumbers[middle]) / 2; // Return average of the two middle values
  } 
  
}

console.log(calculateMedian(10, 20, "30", 40 , 50))

function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}


console.log(fileExists(inputFile))







module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 