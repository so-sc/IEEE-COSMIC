import React from "react";
import Link from "next/link";
import  CFPdata from './CFP.json'
const CFP = () => {
  return (
    <div className="p-2 space-y-3">
      <h1 className="font-bold text-2xl my-3">Call for Papers</h1>
     <p>DISCOVER solicits paper submissions across six tracks as listed below. Kindly note that the submissions are not limited to the topics mentioned in each track.</p>
     <div className="">
     {CFPdata.map(track => (
        <div className="space-x-4" key={track.track}>
          <p className="p-3 text-white rounded-md bg-[#323332]">{track.track}</p>
          <ul className="list-disc grid grid-cols-2">
            {track.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
     </div>
   
    </div>
  );
};

export default CFP;
