import React, { Fragment, ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ToastifayContainer = ({ children }: any) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ToastifayContainer;
