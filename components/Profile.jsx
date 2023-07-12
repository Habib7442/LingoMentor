"use client";

import { useEffect, useState } from "react";
import { account } from "@appwrite/appwrite";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const checkAuthenticated = async () => {
      try {
        const response = await account.get();
        setUserDetails(response);
      } catch (error) {
        router.push("/login"); // Redirect to login page if not authenticated
      }
    };

    checkAuthenticated();
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center bg-none">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Profile
        </h2>
        <div className="mt-8">
          <p>
            <strong>Name:</strong> {userDetails?.name}
          </p>
          <p>
            <strong>Email:</strong> {userDetails?.email}
          </p>
        </div>
        <div className="flex items-center justify-between mt-8">
          <button
            className="px-4 py-2 text-base font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
