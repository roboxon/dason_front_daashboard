import LoginForm from "@/app/components/forms/Login";
import Title from "@/app/components/forms/Title";
import { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <LoginForm />
      <Title />
    </Fragment>
  );
};

export default Login;
