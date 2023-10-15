import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="../../public/pexels-sebastiaan-stam-1097456.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-9">
            <h1 className="text-5xl text-black font-bold">Box Office News!</h1>
            <p className="py-6 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
