import React from "react";
import SubmissionData from "./Submission.json";
const Submission = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl my-3">Paper Submission Details</h1>
      <div className="pb-3 space-y-4">
        {SubmissionData.map((details, index) => (
          <div key={index}>
            <h1 className="text-[#018100] pb-2 text-sm font-bold">
              {details.title}
            </h1>
            <ol className="list-decimal list-inside">
              {details.content.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submission;
