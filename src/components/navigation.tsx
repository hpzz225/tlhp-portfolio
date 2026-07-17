"use client";

import { scrollToSection } from "@/lib/utils";
import { navItems } from "@/config/navigation";
import { MobileMenu } from "@/components/mobile-menu";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export const Navigation = () => {
  const activeSection = useScrollSpy();

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => handleNavClick("home")}
          className="font-mono text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary"
        >
          TLHP
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`group relative text-sm transition-colors duration-300
                ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                {item.label}
              </span>

              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
              />
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <MobileMenu
            activeSection={activeSection}
            onNavigate={handleNavClick}
          />
        </div>
      </div>
    </nav>
  );
};
