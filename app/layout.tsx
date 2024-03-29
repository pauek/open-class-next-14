import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Open Class Next 14 Demo",
	description: "Generated by @pauek",
};

interface Props {
	children: React.ReactNode;
}
export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
