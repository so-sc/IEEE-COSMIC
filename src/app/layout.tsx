import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Dates from "@/components/Dates";
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import About from "@/components/About";
import CFP from "@/components/CFP";
import Committee from "@/components/Committee";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex justify-center bg-gray-200 items-center w-full">
          <div className="max-w-5xl md:px-10 px-5">
            <div>
              <img
                src="/cover1.png"
                className="my-5 shadow-md rounded-lg"
                alt="cover"
              />
            </div>
            <Tabs defaultValue="about">
              <TabsList className="bg-gradient-to-br  w-fit  from-gray-700 via-gray-800 to-black">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="cfp">CFP</TabsTrigger>
                <TabsTrigger value="committe">Committe</TabsTrigger>
                <TabsTrigger value="dates">Dates</TabsTrigger>
                <TabsTrigger value="speakers">Speakers</TabsTrigger>
                <TabsTrigger value="sponsors">Sponsors</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="registration">Registration</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              <div>
                <img
                  src="/bg.png"
                  className="my-5 h-80 w-full object-cover shadow-lg rounded-md"
                  alt="cover"
                />
              </div>
              <TabsContent
                value="about"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between mb-5"
              >
                <div className="md:w-1/3">
                  <div className="bg-white mb-5 h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      TECHNICALLY SUPPORTED BY
                    </div>
                    <div className="py-10 px-5 flex justify-center items-center">
                      <img src="/sosc.png" alt="sosc" className="w-32" />
                    </div>
                  </div>
                  <div className="bg-white h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      PREVIOUS EDITIONS
                    </div>
                    <div className="py-5 px-5 flex justify-start items-center">
                      <ul className="flex flex-col gap-3">
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <About />
                </div>
              </TabsContent>
              <TabsContent
                value="cfp"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between mb-5"
              >
                <div className="md:w-1/3">
                  <div className="bg-white mb-5 h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      TECHNICALLY SUPPORTED BY
                    </div>
                    <div className="py-10 px-5 flex justify-center items-center">
                      <img src="/sosc.png" alt="sosc" className="w-32" />
                    </div>
                  </div>
                  <div className="bg-white h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      PREVIOUS EDITIONS
                    </div>
                    <div className="py-5 px-5 flex justify-start items-center">
                      <ul className="flex flex-col gap-3">
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <CFP />
                </div>
              </TabsContent>
              <TabsContent
                value="committe"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between mb-5"
              >
                <div className="md:w-1/3">
                  <div className="bg-white mb-5 h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      TECHNICALLY SUPPORTED BY
                    </div>
                    <div className="py-10 px-5 flex justify-center items-center">
                      <img src="/sosc.png" alt="sosc" className="w-32" />
                    </div>
                  </div>
                  <div className="bg-white h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      PREVIOUS EDITIONS
                    </div>
                    <div className="py-5 px-5 flex justify-start items-center">
                      <ul className="flex flex-col gap-3">
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
               <Committee/>
                </div>
              </TabsContent>
              <TabsContent
                value="dates"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between mb-5"
              >
                <div className="md:w-1/3">
                  <div className="bg-white mb-5 h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      TECHNICALLY SUPPORTED BY
                    </div>
                    <div className="py-10 px-5 flex justify-center items-center">
                      <img src="/sosc.png" alt="sosc" className="w-32" />
                    </div>
                  </div>
                  <div className="bg-white h-fit rounded-lg shadow-xl ">
                    <div className="bg-gray-900 rounded-t-lg text-white py-2 px-4">
                      PREVIOUS EDITIONS
                    </div>
                    <div className="py-5 px-5 flex justify-start items-center">
                      <ul className="flex flex-col gap-3">
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>{" "}
                        <li className="text-blue-600 font-semibold transition-colors duration-200 hover:text-black">
                          <Link href="#" target="_blank">
                            Link 1
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Dates/>
                </div>
              </TabsContent>
            </Tabs>

            {/* <div>{children}</div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
