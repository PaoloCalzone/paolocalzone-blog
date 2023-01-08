import { useEffect, useRef } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import type { AppProps } from "next/app";
import "@/styles/tailwind.css";
import "focus-visible";
import { Syne } from "@next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

function usePrevious(value: any) {
  let ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current = value;
    }
  }, [value]);

  return ref.current;
}
export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);
  return (
    <main className={`${syne.variable} font-sans`}>
      <Component previousPathname={previousPathname} {...pageProps} />
    </main>
  );
}
