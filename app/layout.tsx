import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import LoginHeader from "@/components/common/LoginHeader";
import { LoginProvider } from "@/context/LoginProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Streamer",
  description: "The ultimate music app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          <LoginProvider>
            <div className="transition-colors bg-background duration-300">
              {children}
            </div>
          
          </LoginProvider>
          </ThemeProvider>
        
      </body>
    </html>
  );
}
