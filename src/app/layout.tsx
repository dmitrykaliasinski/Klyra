import '../styles/globals.scss';

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body style={{minHeight: '100vh'}}>
            {children}
        </body>
        </html>
    );
}
