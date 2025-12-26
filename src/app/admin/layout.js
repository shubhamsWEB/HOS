'use client'
import { DM_Sans, Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'universal-cookie';
import Sidenav from '../../components/Dashboard/Sidenav';
import StoreProvider from "@/appStore/StoreProvider";
import Loader from '../../components/Common/Loader';
import CustomSnackbar from '../../components/Common/Snackbar/index';
import "../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans'
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

function AdminLayoutContent({ children }) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    
    useEffect(() => {
        // Client-side check to ensure only admins can access
        const cookies = new Cookies();
        const adminToken = cookies.get('hos_abc');
        const customerToken = cookies.get('hos_customer_token');
        
        // If customer token exists, redirect immediately
        if (customerToken) {
            router.push('/');
            return;
        }
        
        // If no admin token, redirect to admin login
        if (!adminToken) {
            router.push('/adminlogin');
            return;
        }
        
        // Verify admin token has correct role
        try {
            const [header, payload, signature] = adminToken.split('.');
            const decodedPayload = JSON.parse(atob(payload));
            if (decodedPayload.role !== 'ROLE_ADMIN') {
                // Not an admin - redirect to login
                router.push('/adminlogin');
                return;
            }
            // Token is valid admin token
            setIsAuthorized(true);
        } catch (error) {
            // Invalid token - redirect to login
            router.push('/adminlogin');
        }
    }, [router]);
    
    // Don't render content until authorized (prevents flash of unauthorized content)
    if (!isAuthorized) {
        return <Loader />;
    }
    
    return (
        <Sidenav>
            {children}
            <Loader/>
            <CustomSnackbar />
        </Sidenav>
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${dmSans.className} ${dmSans.variable} ${playfairDisplay.variable}`}>
                <StoreProvider>
                    <AdminLayoutContent>
                        {children}
                    </AdminLayoutContent>
                    </StoreProvider>
            </body>
        </html>
    );
}
