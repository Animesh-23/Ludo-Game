import { Link } from "react-router-dom";
import logo from "../../assets/bg.png";
const Header = () => {
  return (
    <div className=" flex justify-between p-4 items-center  bg-red-600 text-white text-xl">
      <div>
        <img src={logo} alt="logo" height={"35px"} width={"40px"} />
      </div>
      <div className=" flex gap-10 mr-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
