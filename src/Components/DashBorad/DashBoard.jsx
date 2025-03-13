import React, { useState, useEffect } from "react";

export default function DashBoard() {
    const [show, setShow] = useState(false); // For mobile navigation
    const [editModalOpen, setEditModalOpen] = useState(false); // For edit profile modal
    const [username, setUsername] = useState("Andres Berlin"); // Default username
    const [profileImage, setProfileImage] = useState(
        "https://cdn.tuk.dev/assets/webapp/master_layouts/boxed_layout/boxed_layout2.jpg"
    ); // Default profile image

    // Load saved username and profile image from localStorage on component mount
    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        const savedProfileImage = localStorage.getItem("profileImage");

        if (savedUsername) setUsername(savedUsername);
        if (savedProfileImage) setProfileImage(savedProfileImage);
    }, []);

    // Handle profile update
    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const newUsername = e.target.username.value;
        const newProfileImage = e.target.profileImage.files[0];

        if (newUsername) {
            setUsername(newUsername);
            localStorage.setItem("username", newUsername);
        }

        if (newProfileImage) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target.result);
                localStorage.setItem("profileImage", event.target.result);
            };
            reader.readAsDataURL(newProfileImage);
        }

        setEditModalOpen(false); // Close the modal after updating
    };

    return (
        <>
            <div className="bg-gray-200 pb-10">
                {/* Navigation starts */}
                {/* Mobile */}
                <div className={show ? "w-full h-full absolute z-40 transform translate-x-0 " : " w-full h-full absolute z-40 transform -translate-x-full"}>
                    <div className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 z-20 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                        <div className="flex flex-col justify-between h-full">
                            <div className="px-6 pt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg aria-label="Home" id="logo" enableBackground="new 0 0 300 300" height={43} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g>
                                                <path
                                                    fill="#4c51bf"
                                                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                                />
                                            </g>
                                        </svg>
                                        <p className="text-bold md:text2xl text-base pl-3 text-gray-800">The North</p>
                                    </div>
                                    <div id="cross" className=" text-gray-800" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Header */}
                <div className="bg-gray-800 pt-8 pb-16 relative z-10">
                    <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="flex-col flex lg:flex-row items-start lg:items-center">
                            <div className="flex items-center">
                                <img
                                    className="border-2 shadow border-gray-600 rounded-full mr-3 w-12 h-12 object-cover"
                                    src={profileImage}
                                    alt="Profile"
                                />
                                <div>
                                    <h5 className="text-sm text-white leading-4 mb-1">{username}</h5>
                                    <p className="text-xs text-gray-400 leading-4">VP Operations</p>
                                </div>
                            </div>
                            <div className="ml-0 lg:ml-20 my-6 lg:my-0">
                                <h4 className="text-2xl font-bold leading-tight text-white mb-2">Dashboard</h4>
                            </div>
                        </div>
                        <div>
                            <button
                                className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm"
                                onClick={() => setEditModalOpen(true)}
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Edit Profile Modal */}
                {editModalOpen && (
  <div className="fixed inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out animate-fade">
    <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl transform transition-all scale-95 animate-slideUp">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        Edit Profile
      </h2>

      <form onSubmit={handleProfileUpdate} className="space-y-6">
        {/* Username Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            defaultValue={username}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gradient-to-r from-purple-400 to-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Profile Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image
          </label>
          <div className="flex items-center space-x-3">
            <input
              id="profileImage"
              type="file"
              name="profileImage"
              className="hidden"
            />
            <label
              htmlFor="profileImage"
              className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transition cursor-pointer text-sm"
            >
              Choose File
            </label>
            <span className="text-gray-500 text-sm">No file chosen</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            onClick={() => setEditModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-lg hover:from-purple-700 hover:to-blue-800 transition shadow-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}

                {/* Dashboard Content */}
                <div className="container px-6 mx-auto">
                    <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full p-6">
                        <h3 className="text-xl font-bold mb-4">Welcome to Your Dashboard</h3>
                        <p className="text-gray-600">
                            Here’s a quick overview of your account and activities.
                        </p>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-2">Recent Activity</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Updated profile information</li>
                                <li>Submitted a new project request</li>
                                <li>Viewed project progress</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}