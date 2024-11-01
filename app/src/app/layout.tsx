import { Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '../../muiTheme';
import { Toaster } from '@/components/ui/toaster';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${roboto.className} min-h-screen bg-theme-primary`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
