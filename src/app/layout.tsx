import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GLOBORKMANPOWER | Hire Global Talent',
  description: 'The premier platform connecting Indian offline workers and general labor with Russian vacancies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
