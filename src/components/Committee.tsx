import React from "react";
import committeeData from "./Committee.json";
const Committee = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl my-3">Conference Committee</h1>

      <div>
        {committeeData.map((data) => (
          <div className="mb-3">
            <p className="text-sm text-[#018100] font-bold">{data.position}</p>
            {data.people.map((p) => (
              <p>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
