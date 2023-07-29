import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AppContext from "@/context/app-context";
import "@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </AppContext>
  );
}
