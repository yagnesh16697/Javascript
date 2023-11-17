import { faker } from "@faker-js/faker";
import { createObjectCsvWriter } from "csv-writer";
function getRandomDecimal(min, max, decimalPlaces) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  return Math.round(rand * power) / power;
}

const min = 50000;
const max = 150000;
const decimalPlaces = 0;

// Function to generate fake data
function generateFakeData() {
  const data = [];
  for (let i = 1; i <= 100000; i++) {
    data.push({
      EmployeeID: i,
      FirstName: faker.name.firstName(),
      LastName: faker.name.lastName(),
      Department: faker.commerce.department(),
      Salary: getRandomDecimal(min, max, decimalPlaces),
    });
  }
  return data;
}

// Function to write fake data to CSV file
async function writeFakeDataToCsv() {
  const fakeData = generateFakeData();
  const csvWriter = createObjectCsvWriter({
    path: "fake_data.csv",
    header: [
      { id: "EmployeeID", title: "EmployeeID" },
      { id: "FirstName", title: "FirstName" },
      { id: "LastName", title: "LastName" },
      { id: "Department", title: "Department" },
      { id: "Salary", title: "Salary" },
    ],
  });

  try {
    await csvWriter.writeRecords(fakeData);
    console.log("Fake data written to CSV successfully.");
  } catch (error) {
    console.error("Error writing fake data to CSV:", error);
  }
}

// Run the script
writeFakeDataToCsv();
