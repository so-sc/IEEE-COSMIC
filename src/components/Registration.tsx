import React from "react";
import registerData from "./Register.json";
const register = [
  {
    type: "Regular Author (Industry)",
    indianAuthor: "INR 9,000",
    foreignAuthor: "USD 300",
  },
  {
    type: "Regular Author (Academia)",
    indianAuthor: "INR 7,000",
    foreignAuthor: "USD 250",
  },
  {
    type: "IEEE Author",
    indianAuthor: "INR 6,500",
    foreignAuthor: "USD 200",
  },
  {
    type: "Student Author",
    indianAuthor: "INR 6,000",
    foreignAuthor: "USD 200",
  },
  {
    type: "IEEE Student Author",
    indianAuthor: "INR 5,500",
    foreignAuthor: "USD 200",
  },
  {
    type: "Regular Attendee",
    indianAuthor: "INR 2,000",
    foreignAuthor: "USD 150",
  },
  {
    type: "Student Attendee",
    indianAuthor: "INR 1,500",
    foreignAuthor: "USD 100",
  },
];

const Registration = () => {
  return (
    <div className="space-y-5 mb-5">
      <h1 className="font-bold text-2xl my-3">Registration Details</h1>
      <div className="text-sm">
        {registerData.map((data, index) => (
          <div key={index}>
            <h1 className="text-[#018100] text-sm font-bold">{data.title}</h1>
            <ol className="list-decimal mt-2 px-5">
              {data.content.map((cont, index) => (
                <li className="py-1 text-justify" key={index}>
                  {cont}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <div>
        <table className="w-full flex flex-col">
          <div className="py-3 text-sm tracking-wider mb-3 text-white px-3 rounded-md bg-gradient-to-br from-gray-700 via-gray-800 to-black">
            <div className="grid grid-cols-3">
              <div>Registration Type</div>
              <div>Indian Author</div>
              <div>Foreign Author</div>
            </div>
          </div>
          <tbody>
            {register.map((row) => (
              <tr
                key={row.type}
                className="grid text-sm grid-cols-3 px-3 gap-3"
              >
                <td className="my-3">{row.type}</td>
                <td className="my-3">{row.indianAuthor}</td>
                <td className="my-3">{row.foreignAuthor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registration;
