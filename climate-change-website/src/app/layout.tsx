// src/app/layout.tsx

import './styles/global.css'

export const metadata = {
  title: 'Climate Change Website',
  description: 'A website to visualize climate change data',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
