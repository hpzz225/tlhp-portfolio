"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/config/navigation";

interface MobileMenuProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const MobileMenu = ({ activeSection, onNavigate }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 transition-colors hover:text-primary"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full right-0 border-b border-border bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`group flex items-center transition-colors duration-200
                    ${
                      activeSection === item.id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
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
                    transition={{ duration: 0.25 }}
                    className="mr-2 h-px bg-foreground"
                  />

                  <span className="text-sm uppercase tracking-wider">
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
