'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SideBar from './sidebar';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['700'],
});
interface NavItemProps {
	children: React.ReactNode;
	href: string;
	isActive?: boolean;
}
const NavItem = ({ children, href, isActive }: NavItemProps) => {
	return (
		<Button
			asChild
			variant="outline"
			className={cn(
				'bg-transparent hover:bg-transparent border-transparent shadow-transparent text-black rounded-full hover:border-primary  text-lg ',
				isActive && 'bg-black text-white hover:text-white hover:bg-black'
			)}
		>
			<Link href={href}> {children}</Link>
		</Button>
	);
};
export const NavItems = [
	{ href: '/', children: 'Home' },
	{ href: '/about', children: 'About' },
	{ href: '/features', children: 'Features' },
	{ href: '/pricing', children: 'Pricing' },
	{ href: '/contact', children: 'Contact' },
];
const Navbar = () => {
	const pathname = usePathname();
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<nav className="h-20 flex justify-between border-b">
			<Link
				href="/"
				className={cn('flex items-center pl-6 text-4xl ', poppins.className)}
			>
				funroad
			</Link>
			<div className="flex items-center lg:hidden p-4">
				<Button
					onClick={() => setIsNavOpen(true)}
					variant="ghost"
					className="size-12 border-transparent bg-white"
				>
					<MenuIcon className="size-6" />
				</Button>
			</div>

			<SideBar
				path={pathname}
				items={NavItems}
				open={isNavOpen}
				onOpenChange={setIsNavOpen}
			/>
			<div className="items-center gap-4 hidden lg:flex">
				{NavItems.map((item, key) => (
					<NavItem isActive={pathname === item.href} key={key} href={item.href}>
						{' '}
						{item.children}
					</NavItem>
				))}
			</div>
			<div className="hidden lg:flex ">
				<Button
					asChild
					variant="secondary"
					className="h-full border-t-0 border-b-0 border-r-0 border-l rounded-none px-12 bg-white hover:bg-pink-400 transition-colors  text-lg"
				>
					<Link href="sign-in">Log in</Link>
				</Button>
				<Button
					asChild
					variant="secondary"
					className="h-full border-t-0 border-b-0 border-r-0 border-l rounded-none px-12 bg-black text-white hover:text-black hover:bg-pink-400 transition-colors  text-lg"
				>
					<Link href="sign-up">Start selling</Link>
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
