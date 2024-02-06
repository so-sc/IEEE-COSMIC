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
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Submission from "@/components/Submission";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Technical from "@/components/Technical";
export const metadata: Metadata = {
  title: "2024 COSMIC | Sahyadri College of Engineering & Management",
  description: "Sahyadri College of Engineering & Management",
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
                src="/cover.jpg"
                className="my-5 shadow-md rounded-lg"
                alt="cover"
              />
            </div>
            <Tabs defaultValue="about">
              <TabsList className="bg-gradient-to-br from-gray-700 via-gray-800 to-black">
                <TabsTrigger value="about">ABOUT</TabsTrigger>
                <TabsTrigger value="cfp">CFP</TabsTrigger>
                <TabsTrigger value="committe">COMMITTEE</TabsTrigger>
                <TabsTrigger value="dates">DATES</TabsTrigger>
                <TabsTrigger value="speakers">SPEAKERS</TabsTrigger>
                {/* <TabsTrigger value="sponsors">Sponsors</TabsTrigger> */}
                <TabsTrigger value="submissions">SUBMISSIONS</TabsTrigger>
                <TabsTrigger value="registration">REGISTRATIONS</TabsTrigger>
                <TabsTrigger value="contact">CONTACT</TabsTrigger>
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
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <About />
                </div>
              </TabsContent>
              <TabsContent
                value="cfp"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <CFP />
                </div>
              </TabsContent>
              <TabsContent
                value="committe"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Committee />
                </div>
              </TabsContent>
              <TabsContent
                value="dates"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Dates />
                </div>
              </TabsContent>
              <TabsContent
                value="speakers"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Speakers />
                </div>
              </TabsContent>
              {/* <TabsContent
                value="sponsors"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
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
                </div>
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Sponsors />
                </div>
              </TabsContent> */}
              <TabsContent
                value="submissions"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Submission />
                </div>
              </TabsContent>
              <TabsContent
                value="registration"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Registration />
                </div>
              </TabsContent>
              <TabsContent
                value="contact"
                className="flex md:flex-row gap-5 flex-col-reverse justify-between"
              >
                <Technical />
                <div className="md:w-2/3 shadow-xl rounded-lg py-2 px-4 bg-white">
                  <Contact />
                </div>
              </TabsContent>
            </Tabs>
            <Footer />
            {/* <div>{children}</div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
