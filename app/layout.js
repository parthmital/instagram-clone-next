import { Instrument_Sans } from "next/font/google";
import "../styles/global.css";

const instrumentSans = Instrument_Sans({
  display: "swap",
  preload: true
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Instagram Clone</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}