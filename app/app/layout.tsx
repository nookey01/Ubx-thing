import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ubx-thing-8yw5.vercel.app"),
  title: {
    default: "UBX THINGS STD. | Tech, Gaming & Gadget",
    template: "%s | UBX THINGS STD.",
  },
  description:
    "UBX THINGS STD. membahas teknologi, gaming, gadget, AI, hardware, dan berbagai hal menarik seputar dunia digital.",
  keywords: [
    "UBX Things",
    "teknologi",
    "gaming",
    "gadget",
    "AI",
    "hardware",
    "tech news",
  ],
  authors: [{ name: "UBX THINGS STD." }],
  creator: "UBX THINGS STD.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "UBX THINGS STD. | Tech, Gaming & Gadget",
    description:
      "Tech, gaming, gadget, AI, dan hardware dalam satu tempat.",
    type: "website",
    locale: "id_ID",
    siteName: "UBX THINGS STD.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
