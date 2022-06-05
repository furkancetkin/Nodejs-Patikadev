const fs = require("fs");

// Create File
const createFile = () => {
  fs.writeFile(
    "employees.json",
    '{"name": "Employee 1 Name", "salary": 2000}',
    "utf8",
    (err) => {
      if (err) console.log(err);
      console.log("File created with successfully !");
      readFile();
    }
  );
};

// Read File
const readFile = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("File read with successfully !");
    appendFile();
  });
};

// Add Data to File
const appendFile = () => {
  fs.appendFile(
    "employees.json",
    ',{"name": "Employee 2 Name", "salary": 3000}',
    "utf8",
    (err) => {
      if (err) console.log(err);
      console.log("File updated with successfully !");
      deleteFile();
    }
  );
};
// Delete File
const deleteFile = () => {
  fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("File deleted with successfully !");
  });
};

createFile();
