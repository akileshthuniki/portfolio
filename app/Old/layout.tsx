import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akilesh Thuniki - DevOps Engineer",
  description:
    "AWS Certified Cloud Architect and DevOps Engineer with 5+ years of experience in enterprise infrastructure transformation.",
  keywords: ["Cloud Architect", "DevOps Engineer", "AWS", "Kubernetes", "Terraform", "Akilesh Thuniki"],
  authors: [{ name: "Akilesh Thuniki" }],
  creator: "Akilesh Thuniki",
  openGraph: {
    title: "Akilesh Thuniki - DevOps Engineer",
    description:
      "AWS Certified Cloud Architect and DevOps Engineer specializing in enterprise-scale infrastructure transformations.",
    url: "https://your-domain.com",
    siteName: "Akilesh Thuniki Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akilesh Thuniki - DevOps Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akilesh Thuniki - DevOps Engineer",
    description:
      "AWS Certified Cloud Architect and DevOps Engineer specializing in enterprise-scale infrastructure transformations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { 
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23374151'/><stop offset='100%' style='stop-color:%231f2937'/></linearGradient></defs><rect width='32' height='32' rx='6' fill='url(%23grad)'/><text x='16' y='20' font-family='system-ui,sans-serif' font-size='12' font-weight='bold' text-anchor='middle' fill='white'>AT</text></svg>", 
        sizes: "32x32", 
        type: "image/svg+xml" 
      },
    ],
    apple: [{ 
      url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23374151'/><stop offset='100%' style='stop-color:%231f2937'/></linearGradient></defs><rect width='180' height='180' rx='36' fill='url(%23grad)'/><text x='90' y='110' font-family='system-ui,sans-serif' font-size='64' font-weight='bold' text-anchor='middle' fill='white'>AT</text></svg>", 
      sizes: "180x180", 
      type: "image/svg+xml" 
    }],
    other: [
      { 
        rel: "icon", 
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23374151'/><stop offset='100%' style='stop-color:%231f2937'/></linearGradient></defs><rect width='32' height='32' rx='6' fill='url(%23grad)'/><text x='16' y='20' font-family='system-ui,sans-serif' font-size='12' font-weight='bold' text-anchor='middle' fill='white'>AT</text></svg>" 
      },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AT Logo favicon using inline SVG */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23374151'/><stop offset='100%' style='stop-color:%231f2937'/></linearGradient></defs><rect width='32' height='32' rx='6' fill='url(%23grad)'/><text x='16' y='20' font-family='system-ui,sans-serif' font-size='12' font-weight='bold' text-anchor='middle' fill='white'>AT</text></svg>" />
        <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23374151'/><stop offset='100%' style='stop-color:%231f2937'/></linearGradient></defs><rect width='180' height='180' rx='36' fill='url(%23grad)'/><text x='90' y='110' font-family='system-ui,sans-serif' font-size='64' font-weight='bold' text-anchor='middle' fill='white'>AT</text></svg>" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}