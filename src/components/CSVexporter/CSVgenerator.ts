export const appendtoCSV = (newData: string) => {
  let csvContent = sessionStorage.getItem("csvData") || "";
  const csvRow = Object.values(newData).join(",") + "\n";
  csvContent += csvRow;
  sessionStorage.setItem("csvData", csvContent);
};

// Function to export the CSV content from session storage as a downloadable file
export const handleExportCSV = () => {
  // Get the CSV content from session storage
  const csvData = sessionStorage.getItem("csvData");
  //  Create a Blob object and download the file if there is CSV data by checking
  // If there is CSV data
  if (csvData) {
    const blob = new Blob([csvData], { type: "text/csv" }); // Create a new Blob object using the CSV data
    const url = window.URL.createObjectURL(blob); // Create a URL for the Blob object
    const a = document.createElement("a"); // Create a new anchor element
    a.href = url; // Set the href of the anchor to the Blob URL
    a.download = "Mission Data.csv"; // Set the download attribute of the anchor element to the desired file name
    document.body.appendChild(a); // Append the anchor element to the body of the document
    a.click(); // Simulate a click on the anchor element to start the download
    document.body.removeChild(a); // Remove the anchor element from the body of the document
    window.URL.revokeObjectURL(url); // Revoke the Blob URL
  }
};
