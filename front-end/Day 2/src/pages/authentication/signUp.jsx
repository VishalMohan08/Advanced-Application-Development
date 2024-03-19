import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { EyeFilledIcon } from "./../../assets/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./../../assets/icons/EyeSlashFilledIcon";

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="p-5 ease-in">
      <div className="text-center text-2xl font-bold">Hello There!</div>
      <div className="pb-5">
        <div className="mt-8 mb-4 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            isRequired
            label="Mobile Number"
            labelPlacement="outside"
            placeholder="Enter your Mobile Number"
          />
          <Input
            label="Email (Optional)"
            labelPlacement="outside"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Textarea
            isRequired
            minRows={3}
            label="Address"
            labelPlacement="outside"
            placeholder="Enter your Permanent Address"
          />
        </div>
        <div className="mt-6 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            isRequired
            type="number"
            label="Aadhar Number"
            labelPlacement="outside"
            placeholder="Enter your Aadhar number"
          />
          <Input
            isRequired
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-blue-500 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-blue-500 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </div>
        <div className="mt-6 justify-center text-center">
          <Button className="font-semibold" color="primary" variant="faded">
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
}
