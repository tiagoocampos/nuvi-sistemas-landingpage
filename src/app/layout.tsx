import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://nuvi.dev.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nuvi — Sistemas sob medida para o seu negócio",
  description:
    "A Nuvi desenvolve e mantém sistemas sob medida: SaaS, sites e automações. Conheça Kirvo e Alô Delivery, produtos reais em produção.",
  keywords: [
    "Nuvi",
    "desenvolvimento de software",
    "SaaS",
    "landing page",
    "automações",
    "Kirvo",
    "Alô Delivery",
  ],
  icons: {
    icon: [
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Nuvi — Sistemas sob medida para o seu negócio",
    description:
      "Desenvolvemos e mantemos sistemas sob medida: SaaS, sites e automações. Conheça Kirvo e Alô Delivery, produtos reais em produção.",
    url: siteUrl,
    siteName: "Nuvi",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1584,
        height: 396,
        alt: "Nuvi",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvi — Sistemas sob medida para o seu negócio",
    description:
      "Desenvolvemos e mantemos sistemas sob medida: SaaS, sites e automações.",
    images: ["/brand/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
