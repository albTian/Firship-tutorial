import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fireship tutorial",
  description: "Tutorial to try nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
