// src/app/layout.tsx

import './styles/global.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Climate Change Website',
  description: 'A website to visualize climate change data',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Analytics />
      <body>
        {children}
      </body>
    </html>
  )
}
