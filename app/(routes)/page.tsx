import RegisterForm from "../components/forms/Register";
import EmailRegisterForm from "../components/forms/EmailRegister";
import LoginForm from "../components/forms/Login";
import { Fragment } from "react";

export default function Home() {
  return (

      <Fragment>
        <div className=" justify-center">
          <div className=" flex-col gap-5">
            <EmailRegisterForm />
          </div>

          <div className="flex flex-col gap-5">
            <LoginForm/>
          </div>

        </div>
          
      </Fragment>
  );
}
