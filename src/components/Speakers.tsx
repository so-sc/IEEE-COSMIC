import React from "react";
import speakerData from "./Speakers.json";
const Speakers = () => {
  return (
    <div className="space-y-4 mt-3">
      <h1 className="text-2xl font-bold">Speakers</h1>
      {speakerData.map((speaker, index) => (
        <div key={index} className="space-y-3">
          <p className="p-3 text-white rounded-md bg-gradient-to-br from-gray-700 via-gray-800 to-black">
            {speaker.person}
          </p>
          <div className="flex text-sm">
            <div>
              {speaker.about.map((para, index) => (
                <p className="py-2 text-justify" key={index}>
                  {para}
                </p>
              ))}
            </div>
            {/* <img
              className="w-[140px] h-[140px] flex-2 "
              src={speaker.src}
              alt=" img"
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speakers;
