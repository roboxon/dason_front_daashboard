import LoginForm from "@/app/components/forms/Login";
import { useAppSelector } from "@/app/redux/store";
import { resource } from "@/public/data/resource";

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
