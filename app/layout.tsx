import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FloatingCallButton from '@/components/FloatingCallButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'INNOVEITY - Bridging Education & Industry',
  description: 'Leading provider of educational solutions, corporate training, and sustainable development initiatives across India.',
  keywords: 'education, industry, training, sustainability, ESG, corporate solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
          <Navbar />
          <main>{children}</main>
          <WhatsAppWidget />
          <FloatingCallButton />
        </div>
      </body>
    </html>
  );
}