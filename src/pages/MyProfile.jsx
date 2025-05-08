import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
        email: email
      });
      setUser({ ...user, displayName: name, photoURL: photoURL, email: email });
      setEditing(false);
      Swal.fire({
        title: "Profile Updated Successfully",
        icon: "success",
        draggable: true
      });
    } catch (error) {
      alert("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="py-24 px-3 md:px-0 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6 text-[#0c2f54]">My Profile</h1>

      <img
        src={user?.photoURL}
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-4"
      />

      {editing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full mb-2"
            placeholder="Name"
          />
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full mb-4"
            placeholder="Photo URL"
          />
          <button
            onClick={handleUpdate}
            className="btn bg-blue-500 text-white w-full"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-2 text-[#0c2f54]">
            {user?.displayName}
          </h2>
          <h2 className="text-lg font-normal mb-2 text-[#0c2f54]">
            {user?.email}
          </h2>
          <button
            onClick={() => setEditing(true)}
            className="btn bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white"
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default MyProfile;
