import { useEffect } from "react";

import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import * as gtag from "../lib/gtag";

import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <title>Whichmealservice Landing Page</title>
                <link
                    rel="manifest"
                    href="../public/favicon/site.webmanifest"
                />
                <meta
                    name="keywords"
                    content="Which meal service Landing Page, meta, food"
                />
                <meta name="author" content="Which meal service Landing Page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Online comparison tool to help users find the best meal service kit"
                />
                <meta name="theme-color" content="#6547ec" />
                <meta
                    name="ahrefs-site-verification"
                    content="8a75fe9f26b8ba8bd048f93a7e8f6c0ab473936ae147a3c7169445a484a4c658"
                ></meta>
            </Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
};
export default MyApp;
