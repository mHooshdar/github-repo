import './globals.css'

export const metadata = {
  title: 'Github repositories',
  description: 'Github repositories list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
