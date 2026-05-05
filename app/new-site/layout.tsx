import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Akilesh Thuniki - Senior DevOps & Cloud Engineer | AWS Certified",
  description:
    "Senior DevOps Engineer with 6+ years building cloud infrastructure at fintech and healthcare scale. AWS Certified specialist in Kubernetes, Terraform, GitOps, and DevSecOps.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS Certified",
    "Kubernetes",
    "Terraform",
    "GitOps",
    "CI/CD",
    "Infrastructure as Code",
    "Platform Engineering",
    "Site Reliability Engineering",
  ],
  authors: [{ name: "Akilesh Thuniki" }],
  creator: "Akilesh Thuniki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akileshthuniki.com",
    title: "Akilesh Thuniki - Senior DevOps & Cloud Engineer",
    description:
      "AWS Certified DevOps Engineer specializing in cloud infrastructure, Kubernetes, and platform reliability.",
    siteName: "Akilesh Thuniki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akilesh Thuniki - Senior DevOps & Cloud Engineer",
    description:
      "AWS Certified DevOps Engineer with 6+ years experience in cloud infrastructure and platform engineering.",
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
}

export default function NewSiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
