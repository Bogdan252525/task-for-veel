import { Header, Footer, Container } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'A simple Todo App built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
        <Header />
        <main className="p-4 flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
