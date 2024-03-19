import React from "react";
import NavBar from "../../assets/static/navbar";
import backgroundImage from "../../assets/images/AuthBG.jpg";
import { Button } from "@nextui-org/react";

export default function ContactUs() {
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
          <div className="flex flex-row justify-between">
            <div className="basis-1/2 bg-slate-200 border-8 border-slate-200 opacity-90 rounded-l-xl">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg mb-8">
                  If you have any questions, inquiries, or feedback, feel free
                  to contact us using the information below:
                </p>
                <div className="mb-4">
                  <p className="font-bold">Email:</p>
                  <p>info@agricultureloans.com</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Phone:</p>
                  <p>+1 (123) 456-7890</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Address:</p>
                  <p>123 Farming Way, Agricultureville, USA</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 text-center text-white bg-black bg-opacity-80 border-8 border-opacity-20 border-black rounded-r-xl">
              <div className="mt-[15%] ml-7">
                <div className="font-bold text-2xl">
                  Join Us as Pioneers in Agricultural Finance!
                </div>
                <div className="text-lg mt-5 mb-8">
                  Sign up today and embark on a journey to revolutionize the way
                  your farming is funded.
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
          </div>
        </div>
      </div>
    </>
  );
}
