import React from "react";
import NavBar from "../../assets/static/navbar";
import backgroundImage from "../../assets/images/AuthBG.jpg";
import { Button, Input, Select, Textarea } from "@nextui-org/react";

export default function ApplyForLoan() {
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
        <div className="flex items-center justify-center w-full">
          <div className="bg-slate-200 border-8 border-slate-200 opacity-90 rounded-xl w-3/4">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Apply for Loan</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  isRequired
                  label="Applicant Name"
                  labelPlacement="outside"
                  placeholder="Enter your name"
                />
                <Input
                  isRequired
                  label="PAN Number"
                  labelPlacement="outside"
                  placeholder="Enter your PAN number"
                />
                <Input
                  isRequired
                  label="Applicant Salary"
                  labelPlacement="outside"
                  placeholder="Enter your salary"
                />
                <Input
                  isRequired
                  label="Applicant Mobile"
                  labelPlacement="outside"
                  placeholder="Enter your mobile number"
                />
                <Input
                  isRequired
                  label="Loan Amount Required"
                  labelPlacement="outside"
                  placeholder="Enter the loan amount"
                />
                <Input
                  isRequired
                  label="Loan Repayment Months"
                  labelPlacement="outside"
                  placeholder="Enter the number of months for repayment"
                />
                <Input
                  isRequired
                  label="Applicant Aadhar"
                  labelPlacement="outside"
                  placeholder="Enter your Aadhar number"
                />
                <Select
                  isRequired
                  label="Type of Document"
                  labelPlacement="outside"
                  placeholder="Select the type of document"
                  options={["Document Type 1", "Document Type 2", "Document Type 3"]}
                />
                <div className="col-span-2">
                  <Textarea
                    isRequired
                    minRows={3}
                    label="Upload Documents"
                    labelPlacement="outside"
                    placeholder="Upload your documents here"
                  />
                </div>
              </div>
              <div className="mt-6 justify-center text-center">
                <Button className="font-semibold" color="primary" variant="faded">
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
