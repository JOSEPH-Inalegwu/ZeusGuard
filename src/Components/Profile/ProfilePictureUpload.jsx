import React, { useState, useEffect } from "react";

const ProfilePictureUpload = () => {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfilePic(base64String);
        localStorage.setItem("profilePic", base64String); // Save to localStorage
        window.dispatchEvent(new Event("storage")); // Dispatch event to notify other components
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-24 h-24">
      <label className="cursor-pointer relative block w-full h-full rounded-full overflow-hidden border border-cyan-500 shadow-2xl">
        <input
          type="file"
          className="hidden"
          onChange={handleImageUpload}
          accept="image/*"
        />
        {profilePic ? (
          <div className="relative w-full h-full">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-gray-500 bg-opacity-100 flex items-center justify-center opacity-0 hover:opacity-50 transition ease-in-out">
              <span className="text-black font-semibold">Change</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white rounded-full">
            Upload Pic
          </div>
        )}
      </label>
    </div>
  );
};

export default ProfilePictureUpload;
