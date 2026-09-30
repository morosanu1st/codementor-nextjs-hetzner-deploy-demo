import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js 15 on Hetzner — Deploy Demo',
  description: 'Minimal App Router sample for Ubuntu + Nginx + systemd deploy walkthrough',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: '2rem', lineHeight: 1.5 }}>
        {children}
      </body>
    </html>
  );
}
