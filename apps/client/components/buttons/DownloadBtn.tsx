'use client';

import { ArrowDownToLine } from 'lucide-react';
import axios from 'axios';

/**
 * Download button component
 * @param documentUrl - The URL of the document to download
 * @param campaignTitle - The title of the campaign
 * @returns the download button component
 */
const DownloadBtn = ({
  documentUrl,
  campaignTitle,
}: {
  documentUrl: string;
  campaignTitle: string;
}) => {
  const getDocument = async () => {
    try {
      // Fetch the document using axios
      const response = await axios.get(documentUrl, { responseType: 'blob' });

      // Check if the response is ok
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      // Get the Blob from the response
      const blob = response.data;

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a link element
      const a = document.createElement('a');
      a.href = url;
      a.download = `${campaignTitle}`; // Specify the filename here
      a.style.display = 'none'; // Hide the link element

      // Append the link to the document body
      document.body.appendChild(a);

      // Programmatically click the link to trigger the download
      a.click();

      // Clean up and remove the link
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error fetching or downloading document:', error);
    }
  };

  return (
    <button
      onClick={getDocument}
      className="text-sm flex items-center gap-2 px-5 py-2.5 bg-app-gray-900 hover:bg-app-gray-800 text-white rounded-md w-max"
    >
      <ArrowDownToLine size={14} />
      <span>Download PDF</span>
    </button>
  );
};
export default DownloadBtn;
