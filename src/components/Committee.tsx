"use client";

import React, { useState, useEffect } from "react";
import committeeData from "./Committee.json";

// Assuming committeeData has a structure like { OrganizingChairs: [], AdvisoryCommittee: [], ... }
type CommitteeData = {
  OrganizingChairs: string[];
  AdvisoryCommittee: string[];
  // ... other committee types
};

const Committee = () => {
  const [data, setData] = useState<CommitteeData>({
    OrganizingChairs: [],
    AdvisoryCommittee: [] /* ... */,
  });

  useEffect(() => {
    // Assuming committeeData is fetched asynchronously
    setData(committeeData);
  }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

  return (
    <div>
      <h1 className="font-bold text-2xl my-3">Conference Committee</h1>

      <div>
        {Object.keys(data).map((key, index) => (
          <div key={index} className="mb-3">
            <p className="text-sm text-[#018100] font-bold">{key}</p>
            {Array.isArray(data[key as keyof CommitteeData]) ? (
              data[key as keyof CommitteeData].map((p, idx) => (
                <p key={idx}>{p}</p>
              ))
            ) : (
              <p>Not an array</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
