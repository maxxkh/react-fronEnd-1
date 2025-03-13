import React, { useState, useEffect } from "react";

export default function DashBoard() {
    const [show, setShow] = useState(false); // For mobile navigation
    const [editModalOpen, setEditModalOpen] = useState(false); // For edit profile modal
    const [username, setUsername] = useState(""); // Default to empty string
    const [profileImage, setProfileImage] = useState(
        "https://cdn.tuk.dev/assets/webapp/master_layouts/boxed_layout/boxed_layout2.jpg"
    ); // Default profile image

    // Load username from localStorage on mount
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
                                    <h5 className="text-sm text-white leading-4 mb-1">
                                        {username || "User"} {/* Default to "User" if empty */}
                                    </h5>
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
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                            <form onSubmit={handleProfileUpdate}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        defaultValue={username}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                                    <input
                                        type="file"
                                        name="profileImage"
                                        accept="image/*"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="mr-2 px-4 py-2 bg-gray-200 rounded-lg"
                                        onClick={() => setEditModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
