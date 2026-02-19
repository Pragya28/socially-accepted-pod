import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/nav-bar';
import { StoreProvider } from '@/context/store-provider';
import { Footer } from '@/components/footer/footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Socially Accepted',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className} antialiased`}>
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <div className="w-screen flex flex-col gap-1">
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <div className="flex">{children}</div>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
