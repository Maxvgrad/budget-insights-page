import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["csv"];
// REMOVE
function StatementFileUploader() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        console.log('uploading')
    };
    return (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    );
}

export default StatementFileUploader;
