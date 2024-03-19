import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { EyeFilledIcon } from "./../../assets/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./../../assets/icons/EyeSlashFilledIcon";
import { PasswordIcon } from "./../../assets/icons/PasswordIcon";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [mbno, setMbno] = useState("");
  const [loginClicked, setLoginClicked] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateMbno = (value) => /^[0-9]{10}$/.test(value);

  const isInvalid = loginClicked && !validateMbno(mbno);

  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  return (
    <div className="p-5">
      <div className="text-center text-2xl font-bold">Welcome Back!</div>
      <div className="pb-5">
        <div className="mt-8 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            isRequired
            type="number"
            label="Mobile Number"
            value={mbno}
            onChange={(e) => setMbno(e.target.value)}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "normal"}
            errorMessage={isInvalid && "Please enter a valid Phone Number"}
            startContent={<span className="text-blue-500 text-small">+91</span>}
          />
        </div>
        <div className="mt-8 flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            isRequired
            label="Password"
            placeholder="Enter your password"
            startContent={
              <PasswordIcon className="text-2xl text-blue-500 pointer-events-none flex-shrink-0" />
            }
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
          <Button
            className="font-semibold"
            color="primary"
            variant="faded"
            onClick={handleLoginClick}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
}
