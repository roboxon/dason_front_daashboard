"use client";
import { axiosService } from "@/app/services/axios.service";
import DynamicService from "@/app/services/dason.api";
import axios from "axios";
import React from "react";
const RegisterForm = () => {
  const register = () => {
    const data = {
      email: "naghiss@gmail.com",
      password: "asfasdfasdf",
    };

    axiosService("auth/register", data);
  };

  return (
    <button className="btn btn-primary" onClick={register}>
      click
    </button>
    // <div className="flex justify-center items-center w-full bg-white px-5">
    //   <div className="xl:max-w-7xl bg-white w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
    //     <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
    //       <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
    //         Create Account
    //       </h1>
    //       <div className="w-full mt-5 sm:mt-8">
    //         <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
    //           <div className="flex flex-col sm:flex-row gap-3">
    //             <input
    //               type="text"
    //               placeholder="Enter Your First Name"
    //               className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
    //             />
    //             <input
    //               type="text"
    //               placeholder="Enter Your Last Name"
    //               className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
    //             />
    //           </div>
    //           <input
    //             type="text"
    //             placeholder="Enter Your Email"
    //             className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Enter Your Phone No"
    //             className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
    //           />
    //           <input
    //             type="Password"
    //             placeholder="Enter Your Password"
    //             className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
    //           />
    //           <div className="flex items-center gap-1.5  justify-start pl-2">
    //             <div className="form-control">
    //               <label className="label cursor-pointer">
    //                 <input
    //                   type="checkbox"
    //                   className="checkbox-xs checkbox-primary"
    //                 />
    //               </label>
    //             </div>
    //             <h3 className="flex items-center whitespace-nowrap text-xs text-black">
    //               I agree to the
    //               <span className="text-[#4A07DA]">&nbsp;Terms</span>
    //               &nbsp;and
    //               <span className="text-[#4A07DA]">&nbsp;Privacy Policy</span>.
    //             </h3>
    //           </div>
    //           <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
    //             <button className="btn btn-active btn-primary btn-block max-w-[200px]">
    //               Sign Up
    //             </button>
    //             <button className="btn btn-outline btn-primary btn-block max-w-[200px]">
    //               Sign In
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RegisterForm;
