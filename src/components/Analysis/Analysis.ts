// Import necessary modules and components
import Papa from "papaparse";

// Handle file selection
export const handleFileChange = (e: any, setFile: any, setFileName: any) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(e.target.files ? e.target.files[0] : null);
    setFileName(selectedFile ? selectedFile.name : 'No file chosen');
};

// Handle file upload and parse the CSV file using PapaParse
export const handleFileUpload = (e, file, onDataLoaded, setFile) => {
    if (file) {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                // Call onDataLoaded with the parsed data
                onDataLoaded(results.data);
            },
            error: (e) => {
                console.log("Error occurred while parsing: ", e);
            },
        });
        setFile(null); // Clear the file input after processing
    }
};