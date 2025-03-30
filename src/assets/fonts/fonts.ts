import localFont from "next/font/local";

export const mainFont = localFont({
  src: [
    {
      path: "./DIN2014-NarrowExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./DIN2014-NarrowLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./DIN2014-Narrow.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./DIN2014-NarrowDemi.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DIN2014-NarrowBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./DIN2014-NarrowExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-din",
});
