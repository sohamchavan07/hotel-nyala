import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useStore();

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("menu"), path: "/menu" },
    { name: t("about"), path: "/about" },
    { name: t("contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mr" : "en");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-card/98 backdrop-blur-md shadow-sm"
          : "border-b bg-card/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-transform hover:scale-105"
          >
            <div className="relative">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                Hotel Nyala
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium tracking-wider uppercase mt-0.5">
                {t("since")}
              </p>
              {/* Decorative underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md",
                  "hover:text-primary hover:bg-accent/50",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {item.name}
                {/* Active indicator */}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
                )}
                {/* Hover indicator */}
                {!isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-8" />
                )}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md hover:bg-accent hover:text-primary ml-2"
              title={language === "en" ? "मराठीत बदला" : "Switch to English"}
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "MR" : "EN"}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-foreground hover:bg-accent hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              className="p-2 rounded-md text-foreground hover:bg-accent hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 space-y-1 border-t mt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md transition-all duration-200",
                  "hover:bg-accent hover:text-primary",
                  isActive(item.path)
                    ? "text-primary bg-accent/50 border-l-4 border-primary"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

