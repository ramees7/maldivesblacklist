import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

export default function Report() {
  const [description, setDescription] = useState("");

  // Handler for text change
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };
  return (
    <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-20">
      <div className="w-full bg-white rounded-md shadow-md p-5">
        <h3 className="text-2xl font-semibold mb-4">Description</h3>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          className="bg-white"
          theme="snow"
        />
      </div>
    </div>
  );
}
