import React from "react";
import NavBar from "../../assets/static/navbar";
import { Chip, Spacer } from "@nextui-org/react";
import backgroundImage from "../../assets/images/AuthBG.jpg";
import Footer from "../../assets/static/footer";

export default function ProfilePage() {
  // Dummy user data
  const user = {
    name: "John Doe",
    address: "123 Main Street, City, Country",
    mobileNumber: "+1234567890",
    loanId: "123456",
    email: "john.doe@example.com",
    monthlyEMI: "5000",
  };

  return (
    <>
      <NavBar />
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="p-4 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="text-lg font-semibold">Name: {user.name}</div>
          <Spacer y={1} />
          <div>Address: {user.address}</div>
          <Spacer y={1} />
          <div>Mobile Number: {user.mobileNumber}</div>
          <Spacer y={1} />
          <div>Loan ID: {user.loanId}</div>
          <Spacer y={1} />
          <div>Email: {user.email}</div>
          <Spacer y={1} />
          <div>
            Monthly EMI: Rs.
            {user.monthlyEMI}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
