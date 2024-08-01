import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav(){
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <a href="/" className="hover:text-gray-300">Sameed Irfan</a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-300">About</a>
        </li>
        <li className="ml-auto">
          <a href="https://github.com/SameedIrfan7" className="hover:text-gray-300">Github</a>
        </li>
      </ul>
    </nav>
  );
}
export default function RootLayout({
  children,
}: { children: React.ReactNode ;}){
  return (
    <html lang="en" >
      <head>
        <title>Gallery</title>
      </head>
      <body className="" >
        <TopNav />
        {children}
        </body>
    </html>
  );
}