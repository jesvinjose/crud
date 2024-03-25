import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../urls/BaseUrl";


function DeleteUser() {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        "x-access-token": token,
      };

      const response = await axios.get(`${baseurl}/delete-user`, {
        headers: headers,
      });

      const result = response.data;
      if (response.status === 200) {
        localStorage.removeItem("token")
        navigate("/login")
      }

    } catch (error) {
      console.error("Error fetching block status of user:", error);
    }
  };
  

  return (
    <div className="w-[40%] m-auto">
      <div className="text-center">
        <p className="m-10 text-[2rem]">Delete User</p>
      </div>

      <form onSubmit={handleDelete}>
        <div className="text-center mx-auto">
          <button type="submit" className="text-black bg-blue-500 px-4 py-2">
            Delete user
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteUser;
