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
  title: {
    default: "2024 COSMIC | Sahyadri College of Engineering & Management",
    template: `%s - 2024 COSMIC | Sahyadri College of Engineering & Management`,
  },
  description: "Sahyadri College of Engineering & Management",
  keywords: [
    "scem",
    "Sahyadri College of Engineering & Management",
    "Sahyadri College of Engineering and Management",
    "SOSC",
    "Sahyadri Open Source Community",
    "Sahyadri Campus",
    "Cosmic",
    "Sahyadri Cosmic",
    "Cosmic 2024",
  ],
  creator: "so-sc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cosmic.sahyadri.edu.in/",
    title: "2024 COSMIC | Sahyadri College of Engineering & Management",
    description: "Sahyadri College of Engineering & Management",
    siteName: "2024 COSMIC | Sahyadri College of Engineering & Management",
    // images: [
    //   {
    //     url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: "2024 COSMIC | Sahyadri College of Engineering & Management",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2024 COSMIC | Sahyadri College of Engineering & Management",
    description: "Sahyadri College of Engineering & Management",
    // images: [siteConfig.ogImage],
    creator: "@sahyadri_osc",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
                <TabsTrigger value="about">HOME</TabsTrigger>
                <TabsTrigger value="cfp">CFP</TabsTrigger>
                <TabsTrigger value="committe">COMMITTEE</TabsTrigger>
                <TabsTrigger value="dates">DATES</TabsTrigger>
                <TabsTrigger value="speakers">SPEAKERS</TabsTrigger>
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
