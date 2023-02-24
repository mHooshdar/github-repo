import './globals.css';
import ReactQueryWrapper from './components/ReactQueryWrapper';

export const metadata = {
  title: 'Github repositories',
  description: 'Github repositories list',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <ReactQueryWrapper>
          <main className="container mx-auto">{children}</main>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
