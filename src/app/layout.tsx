import '@/styles/globals.css';
import { HeaderFeature, FooterFeature } from '@/features';
import { poppins } from '@/common/fonts';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={[poppins.variable, poppins.className].join(' ')}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <HeaderFeature />
          <main
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </main>
          <FooterFeature />
        </div>
      </body>
    </html>
  );
}
