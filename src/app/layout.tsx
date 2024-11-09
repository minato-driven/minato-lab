import 'bootstrap/dist/css/bootstrap.min.css';  // BootstrapのCSSをインポート
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}