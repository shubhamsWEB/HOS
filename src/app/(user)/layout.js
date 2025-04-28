import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from '@/components/Common/NavBar';
import Footer from '@/components/Common/Footer';
import StoreProvider from "@/appStore/StoreProvider";
import Loader from "@/components/Common/Loader/DiamondLoader";
import {Box} from '@mui/material';
import ThemeProvider from "@/components/Common/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "House of Sansa - Luxury Jewelry",
  description: "Premium jewelry for special moments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider>
            <NavBar />
            <Box>
              {children}
            </Box>
            <Loader />
            <Footer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
