import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mercedes App",
  description: "Mercedes App",
  icons: {
    icon: "/favicon.ico",
  },
};




export default function RootLayout({ children }) {
  return (
   <html lang="fr">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
