'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
	{ id: 'about', label: 'About' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
	const [activeSection, setActiveSection] = useState('about');

	return (
		<nav className="fixed z-50 top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border">
			<div className="max-w-6xl mx-auto py-4">
				<div className="flex items-center justify-between">
					<h1 className="text-sm font-bold uppercase tracking-wider font-mono">
						TLHP
					</h1>

					{/* Desktop menu */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => setActiveSection(item.id)}
								className={`
									relative text-sm capitalize transition-colors duration-300 group
									${
										activeSection === item.id
											? 'text-foreground'
											: 'text-muted-foreground hover:text-foreground'
									}
								`}
							>
								<span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
									{item.label}
								</span>
								<span className="absolute left-0 -bottom-1 h-0.5 bg-foreground w-0 transition-all duration-300 group-hover:w-full"></span>
							</button>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<MobileMenu
							activeSection={activeSection}
							setActiveSection={setActiveSection}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

interface MobileMenuProps {
	activeSection: string;
	setActiveSection: (section: string) => void;
}

const MobileMenu = ({ activeSection, setActiveSection }: MobileMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleItemClick = (itemId: string) => {
		setActiveSection(itemId);
		setIsOpen(false);
	};

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="p-2 text-foreground hover:text-primary transition-colors"
				aria-label="Toggle menu"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border"
					>
						<div className="px-6 py-4 space-y-4 flex flex-col">
							{navItems.map((item) => (
								<motion.button
									key={item.id}
									onClick={() => handleItemClick(item.id)}
									className={`group flex items-center text-base uppercase transition-all duration-200 ${
										activeSection === item.id
											? 'text-foreground'
											: 'text-muted-foreground hover:text-foreground'
									}`}
									whileHover="hover"
									initial="initial"
									animate="initial"
								>
									<motion.div
										variants={{
											initial: {
												width: 0,
												opacity: 0,
												x: -8,
											},
											hover: {
												width: 16,
												opacity: 1,
												x: 0,
											},
										}}
										transition={{
											duration: 0.3,
											ease: 'easeOut',
										}}
										className="h-px bg-foreground mr-2"
									/>
									<span className="text-sm tracking-wider ">
										{item.label}
									</span>
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
