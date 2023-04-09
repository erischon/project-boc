import "../globals.css";

/**
 * Metadata for Dashboard pages
 */
export const metadata = {
  title: "BOC",
};

/**
 * @description The Layout for Dashboard pages
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>Navbar</nav>
        <div>Vertical bar</div>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
