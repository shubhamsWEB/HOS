import { Inter } from "next/font/google";
// import "./globals.css";
// import NavBar from '../components/Common/NavBar';
// import Footer from '../components/Common/Footer';
import Sidenav from '../../components/Dashboard/Sidenav';
import StoreProvider from "@/appStore/StoreProvider";
import Loader from '../../components/Common/Loader';
import ThemeProvider from "@/components/Common/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "House of Sansa - Admin Dashboard",
    description: "Management dashboard for House of Sansa jewelry",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <ThemeProvider>
                        <Sidenav>
                            {children}
                            <Loader/>
                        </Sidenav>
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
