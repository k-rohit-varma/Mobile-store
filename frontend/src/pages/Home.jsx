import React from "react";
import Login from "../components/Login";
import open_1 from "../assets/open_1.png";
import Card from "../components/Card";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="flex flex-row align-center justify-around text-center mb-8 mt-8">
        <h1 className="text-3xl font-bold  ">Mobile Store</h1>
        <Button
          text="Login"
          onClick={() => {
            navigation("/login");
          }}
        />
      </div>

      <div className="flex flex-row items-center justify-around h-2/3 w-screen gap-10">
        <img
          src={open_1}
          alt="Logo"
          className="w-2/5 h-auto mr-10 ml-10 rounded-xl"
        />
        {/* <Login /> */}

        <div>
          <h2 className="text-4xl font-medium mb-2">The finest </h2>
          <h1 className="text-4xl font-medium mb-2 ">Mobiles built to</h1>
          <h1 className="text-4xl font-medium mb-4">perfection</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            veritatis accusamus laborum vero vitae nemo? Aut adipisci voluptatum
            dolorem molestiae facere laudantium ipsa, harum magni, laboriosam
            dolore temporibus laborum nam.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        {/* need to add classes */}
      </div>
    </div>
  );
};

export default Home;
