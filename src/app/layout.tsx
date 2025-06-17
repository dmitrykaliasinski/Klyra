import '../styles/globals.scss';
import {ReactNode} from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
        <body style={{minHeight: '100vh'}}>
            {children}
        </body>
        </html>
    );
}
