import "styles/tailwind.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fast Food Meal Planner',
  description: 'Plan your fast food meals based on nutritional requirements',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
