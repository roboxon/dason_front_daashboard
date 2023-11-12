import ChangeLanguage from "../components/language/ChangeLanguage";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="top-0 sticky z-50 h-20 navbar bg-base-100">
      <Navigation />
    </div>
  );
};

export default Header;
