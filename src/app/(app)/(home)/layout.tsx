import Footer from './footer';
import Navbar from './navbar';

interface Prob {
	children: React.ReactNode;
}
export default function Layout({ children }: Prob) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className=" flex-1  bg-[#f4f4f0]">{children}</div>
			<Footer />
		</div>
	);
}
