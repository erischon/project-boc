import "./globals.css";

import { Providers } from "@/components/Providers";

/**
 * Metadata for the entire site.
 */
export const metadata = {
  title: "BOC",
  description:
    "Un outil de back office pour faciliter la gestion administrative des consultants ou des freelances.",
};

/**
 * @description The Layout for the entire site.
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Providers> */}
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
