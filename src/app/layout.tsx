import { ThemeProvider } from '@/components/common/ThemeProvider';
import { manrope } from '@/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Academy',
	description: 'Online learning platform',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body className={`${manrope.className}`}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
