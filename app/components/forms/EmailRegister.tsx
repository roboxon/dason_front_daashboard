"use client";
import React from "react";
import { axiosService } from "@/app/services/axios.service";
import { useForm } from "react-hook-form";

const data = {
  title: "Create Account",
  fullName: [
    {
      placeholder: "Enter Your Email",
      hookForm: "email",
    }
  ],
  button: "Sign Up",
};

const EmailRegisterForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((user) => {
        console.log(user);

        axiosService("auth/emailregister", user);
      })}
      className="flex justify-center items-center w-full bg-white px-5"
    >
      <div className=" bg-white  rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full  md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-primary">
            {data.title}
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col gap-3 items-center">
                {data.fullName.map((item) => (
                  <input
                    key={item.placeholder}
                    {...register(item.hookForm)}
                    type="text"
                    placeholder={item.placeholder}
                    className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                  />
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button className="btn text-white btn-active btn-primary btn-block max-w-[200px]">
                  {data.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmailRegisterForm;