import 'styles/global.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Next.js TypeScript Quickstart',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider defaultTheme="system" enableSystem attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
