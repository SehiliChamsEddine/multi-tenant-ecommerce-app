import { ScrollArea } from '@/components/ui/scroll-area';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import Link from 'next/link';

interface NavItem {
	href: string;
	children: React.ReactNode;
}

interface SideBarProb {
	items: NavItem[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
	path: string;
}

const SideBar = ({ items, open, onOpenChange, path }: SideBarProb) => {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent side="left">
				<SheetHeader className="p-4 border-b">
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<ScrollArea className="flex flex-col h-full  pb-2 overflow-y-auto">
					{items.map((item, key) => (
						<Link
							href={item.href}
							key={key}
							onClick={() => onOpenChange(false)}
							className={cn(
								' border-transparent hover:bg-black hover:text-white block w-full p-4  text-left text-base  font-medium',
								path === item.href && 'bg-black text-white'
							)}
						>
							{item.children}
						</Link>
					))}

					<div className="border-t">
						<Link
							onClick={() => onOpenChange(false)}
							href="sign-in"
							className="block border-transparent hover:bg-black hover:text-white  p-4  text-left text-base  font-medium"
						>
							Log in
						</Link>
						<Link
							onClick={() => onOpenChange(false)}
							href="sign-in"
							className="block border-transparent hover:bg-black hover:text-white  p-4  text-left text-base  font-medium"
						>
							Start selling
						</Link>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};

export default SideBar;
