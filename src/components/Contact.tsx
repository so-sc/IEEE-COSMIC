import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="space-y-3 mt-3">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <div className="space-y-5">
        {/* <h1 className="text-[#018100] text-sm font-bold">Organizing Chairs</h1> */}
        <div className="space-y-3">
          <p className="text-sm font-bold">Email</p>
          <Link
            href="mailto:cosmic@sahyadri.edu.in"
            target="_blank"
            className="text-sm tracking-wider text-blue-600 font-semibold hover:underline underline-offset-4"
          >
            cosmic@sahyadri.edu.in
          </Link>
          {/* <div className="space-y-3">
            <p className="text-sm font-bold">Name 2</p>
            <Link
              href="mailto:name2.sahyadri.edu.in"
              target="_blank"
              className="text-sm hover:underline hover:text-green-700 transition-all duration-300"
            >
              name2.sahyadri.edu.in
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
