import React from "react";
import registerData from "./Register.json";
const register = [
  {
    type: "Regular Author (Industry)",
    indianAuthor: "INR 10,000",
    foreignAuthor: "USD 350",
  },
  {
    type: "Regular Author (Academia)",
    indianAuthor: "INR 8,000",
    foreignAuthor: "USD 300",
  },
  {
    type: "IEEE Author",
    indianAuthor: "INR 7,500",
    foreignAuthor: "USD 250",
  },
  {
    type: "Student Author",
    indianAuthor: "INR 7,000",
    foreignAuthor: "USD 250",
  },
];

const Registration = () => {
  return (
    <div className="space-y-5 mb-5">
      <h1 className="font-bold text-2xl my-3">Registration Details</h1>
      <div>
        {registerData.map((data) => (
          <div>
            <h1 className="text-[#018100] text-sm font-bold">{data.title}</h1>
            <ol className="list-decimal list-inside">
              {data.content.map((cont) => (
                <li>{cont}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <div>
        <table className="w-full flex flex-col">
          <div className="py-3 mb-3 text-white px-3 rounded-md bg-gray-900">
            <div className="grid font-bold grid-cols-3">
              <div>Registration Type</div>
              <div>Indian Author</div>
              <div>Foreign Author</div>
            </div>
          </div>
          <tbody>
            {register.map((row) => (
              <tr key={row.type} className="grid grid-cols-3 px-3 gap-3">
                <td>{row.type}</td>
                <td>{row.indianAuthor}</td>
                <td>{row.foreignAuthor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registration;
