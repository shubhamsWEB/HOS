import { Inter } from "next/font/google";
import StoreProvider from "@/appStore/StoreProvider";
import Loader from '../../components/Common/Loader/index';
import ThemeProvider from "@/components/Common/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "House of Sansa - Admin",
    description: "Admin dashboard for House of Sansa",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <ThemeProvider>
                        {children}
                        <Loader />
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
