import Link from "next/link";
import React from "react";
import footerData from "./Footer.json";

const Footer = () => {
  return (
    <div>
      <footer className="text-white/50 pb-10 bg-gradient-to-br from-gray-700 via-gray-800 to-black mt-5 rounded-t-lg body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap -mb-10 md:text-left text-center order-first">
            <div className="md:w-2/4 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                LOCATION
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href="https://sahyadri.edu.in/"
                    target="_blank"
                    className="transition-all underline underline-offset-4 duration-200 hover:text-green-500"
                  >
                    Sahyadri College of Engineering & Management
                  </Link>
                  , Sahyadri Campus, Adyar, Mangaluru - 575007, Karnataka,
                  India.
                </li>
                <li className="mt-5">
                  Previous IEEE Conferences:
                  <Link
                    href="/ieee-discover-2023"
                    className="transition-all underline underline-offset-4 duration-200 hover:text-green-500 ml-1"
                  >
                    IEEE DISCOVER 2023
                  </Link>
                </li>
              </nav>
            </div>
            {footerData.categories.map((category) => (
              <div className="md:w-1/4 w-full px-4" key={category.title}>
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                  {category.title}
                </h2>
                <nav className="list-none mb-10">
                  {category.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.url}
                        target="_blank"
                        className="transition-all duration-200 hover:text-green-500"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white/50 text-sm text-center sm:text-left">
            Copyright © 2024 IEEE COSMIC. All Rights Reserved. Developed by
            <Link
              href="https://www.sosc.org.in/"
              rel="noopener noreferrer"
              className="hover:text-green-500 underline underline-offset-4 transition-colors text-white/50 ml-1"
              target="_blank"
            >
              SOSC.
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-3">
            <Link
              href="https://www.facebook.com/Sahyadri.edu/"
              target="_blank"
              className="hover:text-green-500 transition-colors text-white/50 ml-1"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="https://twitter.com/sahyadri_campus"
              target="_blank"
              className="hover:text-green-500 transition-colors text-white/50 ml-1"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/sahyadri_college?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              className="hover:text-green-500 transition-colors text-white/50 ml-1"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/school/sahyadri/"
              target="_blank"
              className="hover:text-green-500 transition-colors text-white/50 ml-1"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
