import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signUp";
import { Button } from "@nextui-org/react";
import backgroundImage from "../../assets/images/AuthBG.jpg";
import NavBar from "../../assets/static/navbar";

export default function AuthMain() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForms = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <NavBar />
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="rounded-lg shadow-lg w-3/4 relative z-10">
          <div className="flex flex-row justify-between p-8">
            {showSignUp ? (
              <>
                <div className="basis-1/2 text-center text-white bg-black bg-opacity-80 border-8 border-opacity-20 border-black rounded-l-xl">
                  <div className="mt-[15%] ml-7">
                    <div className="font-bold text-2xl">
                      Already have an account? Login
                    </div>
                    <div className="text-lg mt-[10%] mb-8">
                      Ready to dive back into the world of agricultural finance?
                      <br />
                      Log in to access your account and and explore our latest
                      loan options tailored just for you.
                    </div>
                    <div className="text-xl text-blue-500 mt-[13%]">
                      <Button
                        className="font-semibold"
                        color="danger"
                        variant="shadow"
                        radius="none"
                        onClick={toggleForms}
                      >
                        SIGN UP
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 bg-slate-200 bg-opacity-90 border-8 border-opacity-10 border-slate-200 rounded-r-xl">
                  <SignUp />
                </div>
              </>
            ) : (
              <>
                <div className="basis-1/2 bg-slate-200 border-8 border-slate-200 opacity-90 rounded-l-xl">
                  <Login />
                </div>
                <div className="basis-1/2 text-center text-white bg-black bg-opacity-80 border-8 border-opacity-20 border-black rounded-r-xl">
                  <div className="mt-[15%] ml-7">
                    <div className="font-bold text-2xl">
                      Join Us as Pioneers in Agricultural Finance!
                    </div>
                    <div className="text-lg mt-5 mb-8">
                      Sign up today and embark on a journey to revolutionize the
                      way your farming is funded.
                    </div>
                    <div className="text-xl text-blue-500">
                      <Button
                        className="font-semibold"
                        color="danger"
                        variant="shadow"
                        radius="none"
                        onClick={toggleForms}
                      >
                        SIGN UP
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
