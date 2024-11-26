import { useState, useEffect } from "react";
import { client } from "../client";

const NOTES_QUERY = `*[_type == "note" && _id == "ef061a19-a26b-4fcf-937c-bfc0107c1332"] {
        "fileUrl": file.asset->url
      }`;

const Notes = () => {
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    // Fetch the file URL from Sanity
    const fetchFile = async () => {
      const result = await client.fetch(NOTES_QUERY);
      if (result.length > 0) {
        setFileUrl(result[0].fileUrl);
      }
    };
    
    fetchFile();
  }, []);

  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "notes-file"; // Default file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="notes">
      <div>
        {fileUrl ? (
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download File
          </button>
        ) : (
          <p>Loading file...</p>
        )}
      </div>
    </section>
  );
};

export default Notes;