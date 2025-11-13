export const metadata = {
  title: 'Ms. Sarah Johnson - Teacher Portfolio',
  description: 'Professional portfolio of Ms. Sarah Johnson, experienced educator specializing in elementary education and STEM learning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
