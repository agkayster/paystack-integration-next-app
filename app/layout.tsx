import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: 'BluePay',
	description: 'Paystack integration with next',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning={true}
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					inter.variable
				)}>
				{children}
			</body>
		</html>
	);
}
