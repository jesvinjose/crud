import axios from "axios";
import React, { useState } from "react";
import { baseurl } from "../urls/BaseUrl";

function UpdateUser() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${baseurl}+"/update-user"`, userDetails);
      const result = await response.data;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userDetails);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [name]: value,
      };
    });
  };

  return (
    <div className="w-[40%] m-auto">
      <div className="text-center">
        <p className="m-10">Update User</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput2"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <label
            htmlFor="exampleFormControlInput2"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            Name
          </label>
        </div>

        {/* Password input */}
        <div className="relative mb-6" data-twe-input-wrapper-init>
          <input
            type="password"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput22"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <label
            htmlFor="exampleFormControlInput22"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            Password
          </label>
        </div>

        <div className="text-center lg:text-left">
          <button type="submit" className="text-black bg-blue-500 px-4 py-2">
            Update user
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
