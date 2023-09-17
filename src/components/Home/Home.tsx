import Footer from "../Footer/Footer";
import logo from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between flex-col h-scree bg-blue-800">
      <div className=" flex justify-between gap-80 p-14">
        <img src={logo} className=" basis-1/2" />
        <div className=" basis-1/2 p-10 text-white flex flex-col items-center">
          <h1 className="text-3xl text-center font-mono">
            Play the Ludo game with your friends
          </h1>
          <button
            className=" mt-32 bg-black w-fit px-6 py-2 rounded-lg"
            onClick={() => {
              navigate("game");
            }}
          >
            Play Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
