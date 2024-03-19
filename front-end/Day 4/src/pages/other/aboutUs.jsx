import React from "react";
import NavBar from "../../assets/static/navbar";
import backgroundImage from "../../assets/images/AuthBG.jpg";
import { Button } from "@nextui-org/react";

export default function AboutUs() {
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
            <div className="bg-slate-200 border-8 border-slate-200 opacity-90 rounded-l-xl">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p className="text-lg mb-8">
                  AgricultureLoans.com is dedicated to providing innovative
                  financial solutions for farmers and agricultural businesses.
                  Our mission is to empower farmers with access to flexible
                  financing options tailored to their unique needs.
                </p>
                <p className="text-lg mb-8">
                  We understand the challenges that farmers face, from
                  fluctuating crop prices to unpredictable weather conditions.
                  That's why we're committed to offering competitive rates,
                  personalized service, and expert advice to help farmers
                  succeed.
                </p>
                <p className="text-lg mb-8">
                  At AgricultureLoans.com, we're more than just a lending
                  platform – we're your partner in growth. Join us today and
                  discover how we can help you achieve your agricultural goals.
                </p>
              </div>
            </div>
            <div className="bg-black border-8 border-black opacity-80 rounded-r-xl text-white p-8">
              <div className="mt-[70%]">
                <h2 className="text-2xl font-bold">Ready to get started?</h2>
                <Button
                  className="mt-4 font-semibold"
                  color="primary"
                  variant="shadow"
                >
                  APPLY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
