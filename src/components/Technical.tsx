import Link from "next/link";
const Technical = () => {
  return (
    <div className="md:w-1/3">
      <div className="bg-white mb-5 h-fit rounded-lg shadow-xl ">
        <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
          TECHNICALLY SUPPORTED BY
        </div>
        <div className="py-10 px-5 flex justify-center items-center">
          <Link
            href="https://www.sosc.org.in/"
            className="hover:scale-105 transition-all duration-300"
            target="_blank"
          >
            <img src="/sosc.png" alt="sosc" className="w-32" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technical;
