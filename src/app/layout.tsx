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
import Navigation from "@/components/Navigation";
import CarouselPlugin from "@/components/CarouselPlugin";

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
          <div className="max-w-5xl md:px-5 px-2">
            <div>
              <img
                src="/cover.jpg"
                className="md:my-5 my-2 shadow-md rounded-lg"
                alt="cover"
              />
            </div>
            <div>
              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black lg:flex p-1 rounded-lg flex-wrap gap-2 justify-between lg:px-5 hidden">
                <Link
                  href="/"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  HOME
                </Link>
                <Link
                  href="/cfp"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  CFP
                </Link>
                <Link
                  href="/committe"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  COMMITTEE
                </Link>
                <Link
                  href="/dates"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  DATES
                </Link>
                <Link
                  href="/speakers"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  SPEAKERS
                </Link>
                <Link
                  href="/submissions"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  SUBMISSIONS
                </Link>
                <Link
                  href="/registration"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  REGISTRATIONS
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-white font-semibold hover:bg-gray-900 px-3 py-2 rounded-md"
                >
                  CONTACT
                </Link>
              </div>
              <Navigation />
              <div>
                {/* <img
                  src="/bg.png"
                  className="md:my-5 my-2 h-80 w-full object-cover shadow-lg rounded-md"
                  alt="cover"
                /> */}
                <CarouselPlugin />
              </div>
              <div className="flex rounded-lg md:flex-row p-5 bg-white gap-5 flex-col-reverse justify-between">
                <Technical />
                <div className="md:w-2/3 bg-white">{children}</div>
              </div>
            </div>
            <Footer />
            {/* <div>{children}</div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
