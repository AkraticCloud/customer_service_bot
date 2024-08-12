import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sports Tool Chatbot",
  description: "By: Chris Arevalo, Titus Adesina, Samuel Nnadi, Daniel Anoruo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
