import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TanstackProvider from "./components/providers/tanstack-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://angopen.ao";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Angopen — O Hub do Open Source Angolano",
    template: "%s | Angopen",
  },
  description:
    "Descubra, colabore e impulsione o ecossistema de software livre em Angola. Junte-se à comunidade Angopen para construir um futuro tecnológico mais aberto e inovador.",
  keywords: [
    "open source Angola",
    "software livre Angola",
    "programação Angola",
    "desenvolvedores angolanos",
    "comunidade tech Angola",
    "Angopen",
    "código aberto",
  ],
  authors: [{ name: "Angopen", url: BASE_URL }],
  creator: "Angopen",
  publisher: "Angopen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: BASE_URL,
    siteName: "Angopen",
    title: "Angopen — O Hub do Open Source Angolano",
    description:
      "Descubra, colabore e impulsione o ecossistema de software livre em Angola. Junte-se à comunidade Angopen.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Angopen — O Hub do Open Source Angolano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angopen — O Hub do Open Source Angolano",
    description:
      "Descubra, colabore e impulsione o ecossistema de software livre em Angola.",
    images: ["/og-image.png"],
    creator: "@angopen",
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Angopen",
              url: BASE_URL,
              description:
                "O Hub do Open Source Angolano. Descubra, colabore e impulsione o ecossistema de software livre em Angola.",
              inLanguage: "pt-AO",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#0a0a0a] min-h-full flex flex-col">
        <TanstackProvider>
          {children}
        </TanstackProvider>
        </body>
    </html>
  );
}
