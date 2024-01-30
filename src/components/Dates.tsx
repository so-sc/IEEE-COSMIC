import React from "react";

const Dates = () => {
  return (
    <div className="space-y-4 mt-3">
      <h1 className="text-2xl font-bold">Important Dates</h1>
      <p>
        <span className="font-semibold"> Paper Submission Deadline:</span>{" "}
        Friday, May 31, 2024{" "}
      </p>
      <p>
        <span className="font-semibold">Acceptance Notification:</span> Thursday
        August 8, 2024
      </p>
      <p>
        <span className="font-semibold"> Registration Deadline:</span>{" "}
        Wednesday, September 18, 2024
      </p>
      <p>
        <span className="font-semibold"> CRC Submission Deadline:</span>{" "}
        Wednesday, September 18, 2024
      </p>
      <p>
        <span className="font-semibold"> Conference Dates:</span> October 18 -
        19, 2024 (Friday and Saturday)
      </p>
    </div>
  );
};

export default Dates;
