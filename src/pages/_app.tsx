import { useEffect, useRef } from "react";
import SEO from "@/components/default-seo";
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
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className={`relative ${syne.variable} font-sans`}>
        <SEO />
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
