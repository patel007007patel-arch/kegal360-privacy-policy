import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Privacy Policy | Kegal360",
  description: "Public privacy policy for Kegal360 users.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col font-sans select-none selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
