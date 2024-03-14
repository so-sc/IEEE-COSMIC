import Link from "next/link";
const Technical = () => {
  return (
    <div className="md:w-[31%]">
      <div className="bg-white lg:mb-5 mb-2 shadow-lg h-fit rounded-lg">
        <div className="bg-gradient-to-br text-sm text-center from-gray-700 via-gray-800 to-black rounded-t-lg text-white py-2 px-4">
          TECHNICALLY SUPPORTED BY
        </div>
        <div className="py-10 px-5 flex justify-center items-center">
          <Link
            href="https://www.sosc.org.in/"
            className="hover:scale-105 transition-all duration-300"
            target="_blank"
          >
            <img src="/sosc.png" alt="sosc" className="w-28" />
          </Link>
        </div>
        <div className="pb-10 px-5 flex justify-center items-center">
          <Link
            href="https://ieee-mangalore.org/"
            className="hover:scale-105 transition-all duration-300"
            target="_blank"
          >
            <img src="/ieee-mangalore.png" alt="ieee-mangalore" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technical;
