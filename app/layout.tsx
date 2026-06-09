import type { Metadata } from "next";
import { Montserrat, Quicksand } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/src/app/providers/theme-registry";
import { MainHeader } from "@/src/widgets/main-header";

const quicksand = Quicksand({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${montserrat.variable} font-sans`}
    >
      <body className="m-0 bg-[#282c34]">
        <ThemeRegistry>
          <MainHeader />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
