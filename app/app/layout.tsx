import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UBX THINGS STD.",
  description: "Tech, games & gadget.",
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
