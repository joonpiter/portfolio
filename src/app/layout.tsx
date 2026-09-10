import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/*
          The Spline room's hotspot overlay runs in a sandboxed iframe that
          can't navigate the top window, so it posts
          { type: "spline-nav", href: "/…" } instead. This listener catches it
          and navigates. beforeInteractive so it's live before any page code
          (and the scene) loads. Only internal paths are honoured.
        */}
        <Script id="spline-nav-bridge" strategy="beforeInteractive">
          {`
      window.addEventListener('message', function (e) {
        var d = e && e.data;
        if (d && d.type === 'spline-nav' && typeof d.href === 'string' && d.href.charAt(0) === '/') {
          console.log('[spline-nav] received ->', d.href);
          window.location.assign(d.href);
        }
      });
    `}
        </Script>
        {children}
      </body>
    </html>
  );
}
