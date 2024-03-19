import React from "react";

export const USER = [
  { name: "Apply Loan", link: "#" },
  { name: "Loan Status", link: "#" },
  { name: "Profile", link: "#" },
];
export const HELP = [
  { name: "About Us", link: "#" },
  { name: "Contact Us", link: "#" },
];
export const SUPPORT = [
  { name: "Documentation", link: "#" },
  { name: "Tutorials & guides", link: "#" },
  { name: "Webinars", link: "#" },
  { name: "Open-source", link: "#" },
];

export const Icons = [
  { name: "logo-facebook", link: "#" },
  { name: "logo-twitter", link: "#" },
  { name: "logo-github", link: "#" },
  { name: "logo-linkedin", link: "#" },
  { name: "logo-instagram", link: "#" },
];

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          Agriculture Loans
        </h1>
      </div>
      <div className="flex justify-around gap-6 sm:px-8 px-5 py-16">
        <Item Links={USER} title="RESOURCES" />
        <Item Links={HELP} title="HELP" />
      </div>
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
}
