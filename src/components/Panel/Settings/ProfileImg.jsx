import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdClose, MdEdit } from "react-icons/md";

export default function ProfileImg() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-10">
      <div className="flex items-center space-x-6 ">
        {/* First Image Slot - Show selected image or empty */}
        {selectedImage && (
          <div className="relative group w-[150px] h-[150px]">
            <img
              src={selectedImage}
              alt="Profile"
              className="h-full w-full object-cover rounded-lg shadow-md"
            />
            {/* Remove Button */}
            <button
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 p-1 rounded-full bg-red-500 text-white  "
            >
              <MdClose className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Second Image Slot - Add or Change Image */}
        <div className="w-[150px] h-[150px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
          <label className="cursor-pointer">
            <span className="text-center">
              {selectedImage ? <div className="flex flex-col justify-center items-center"><MdEdit/> Change photo</div>: <div className="flex flex-col justify-center items-center"><IoIosAdd/>  Add new photo</div>}
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
