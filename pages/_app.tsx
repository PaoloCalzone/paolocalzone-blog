import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Syne } from "@next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${syne.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
