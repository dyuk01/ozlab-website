import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { publicAsset } from '../utils/publicAsset';

const studyLinks = [
  { label: 'Frontend', to: '/members#study-fe' },
  { label: 'Backend', to: '/members#study-be' },
  { label: 'UI/UX', to: '/members#study-uiux' },
  { label: 'AI', to: '/members#study-ai' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(location.pathname === '/2024-2025' ? '2024-2025' : '2025-2026');
  const years = ['2025-2026', '2024-2025'];
  const desktopNavRef = useRef(null);

  useEffect(() => {
    setSelectedYear(location.pathname === '/2024-2025' ? '2024-2025' : '2025-2026');
  }, [location.pathname]);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileSub(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, []);

  const navigateToYear = (year) => {
    setSelectedYear(year);
    navigate(year === '2025-2026' ? '/' : '/2024-2025');
  };

  const handleYearChange = (e) => {
    navigateToYear(e.target.value);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileSub(null);
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileSub(null);
  };

  const dropdownPanelClass =
    'absolute left-0 top-full z-[60] mt-2 min-w-[11rem] rounded-xl border border-text-dark/10 bg-white py-2 shadow-lg';

  const dropdownPanelRightClass =
    'absolute right-0 top-full z-[60] mt-2 min-w-[11rem] rounded-xl border border-text-dark/10 bg-white py-2 shadow-lg';

  const dropdownItemButtonClass =
    'flex w-full items-center gap-2 px-4 py-2.5 text-left font-body text-sm text-text-dark transition-colors hover:bg-[#c8b7de]/40';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        isScrolled ? 'bg-[#c8b7de]/95 backdrop-blur-sm shadow-lg' : 'bg-[#c8b7de]/90'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex w-full items-center justify-between px-4 py-0 sm:px-8 sm:py-0.5 lg:px-12">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex h-16 w-16 shrink-0 items-center justify-center leading-none transition-opacity hover:opacity-90 sm:h-20 sm:w-20"
          aria-label="OZ LAB home"
        >
          <img
            src={publicAsset('assets/logo/oz_logo.webp')}
            alt=""
            className="block h-full w-full object-contain"
            width={80}
            height={80}
            decoding="async"
          />
        </Link>

        <ul ref={desktopNavRef} className="hidden md:flex gap-5 lg:gap-8 items-center">
          <li>
            <Link to="/achievements" className="font-body text-sm text-text-dark hover:text-accent transition-colors">
              Achievements
            </Link>
          </li>
          <li>
            <Link to="/members" className="font-body text-sm text-text-dark hover:text-accent transition-colors">
              Members
            </Link>
          </li>
          <li>
            <Link to="/projects" className="font-body text-sm text-text-dark hover:text-accent transition-colors">
              Projects
            </Link>
          </li>
          <li className="relative">
            <button
              type="button"
              aria-expanded={openDropdown === 'studies'}
              aria-haspopup="true"
              onClick={() => setOpenDropdown(openDropdown === 'studies' ? null : 'studies')}
              className="font-body text-sm text-text-dark hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              Studies
              <ChevronDown
                size={14}
                className={`shrink-0 transition-transform ${openDropdown === 'studies' ? 'rotate-180' : ''}`}
              />
            </button>
            {openDropdown === 'studies' && (
              <div className={dropdownPanelClass} role="menu">
                {studyLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    role="menuitem"
                    className={dropdownItemClass}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link to="/about-oz" className="font-body text-sm text-text-dark hover:text-accent transition-colors">
              About OZ
            </Link>
          </li>
          <li className="relative">
            <button
              type="button"
              aria-expanded={openDropdown === 'year'}
              aria-haspopup="listbox"
              aria-label="Select academic year"
              onClick={() => setOpenDropdown(openDropdown === 'year' ? null : 'year')}
              className="font-body text-sm text-text-dark hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              {selectedYear}
              <ChevronDown
                size={14}
                className={`shrink-0 transition-transform ${openDropdown === 'year' ? 'rotate-180' : ''}`}
              />
            </button>
            {openDropdown === 'year' && (
              <div className={dropdownPanelRightClass} role="listbox">
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    role="option"
                    aria-selected={selectedYear === year}
                    className={dropdownItemButtonClass}
                    onClick={() => {
                      navigateToYear(year);
                      setOpenDropdown(null);
                    }}
                  >
                    <span className="inline-flex w-4 shrink-0 justify-center text-text-dark/70" aria-hidden>
                      {selectedYear === year ? '✓' : ''}
                    </span>
                    {year}
                  </button>
                ))}
              </div>
            )}
          </li>
        </ul>

        <button
          className="md:hidden text-text-dark hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[#c8b7de]/95 backdrop-blur-sm border-t border-accent/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col py-4 px-4 space-y-3">
            <li>
              <Link to="/achievements" onClick={closeMobile} className="font-body text-text-dark hover:text-accent transition-colors block py-1">
                Achievements
              </Link>
            </li>
            <li>
              <Link to="/members" onClick={closeMobile} className="font-body text-text-dark hover:text-accent transition-colors block py-1">
                Members
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMobile} className="font-body text-text-dark hover:text-accent transition-colors block py-1">
                Projects
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMobileSub(mobileSub === 'studies' ? null : 'studies')}
                className="font-body text-text-dark hover:text-accent transition-colors flex w-full items-center justify-between py-1"
              >
                Studies
                <ChevronDown size={16} className={mobileSub === 'studies' ? 'rotate-180' : ''} />
              </button>
              {mobileSub === 'studies' && (
                <ul className="mt-2 ml-3 border-l border-accent/30 pl-3 space-y-2">
                  {studyLinks.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="font-body text-sm text-text-dark/90 block py-0.5" onClick={closeMobile}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/about-oz" onClick={closeMobile} className="font-body text-text-dark hover:text-accent transition-colors block py-1">
                About OZ
              </Link>
            </li>
            <li>
              <label className="font-body text-text-dark/70 text-sm block mb-1" htmlFor="year-mobile">
                Year
              </label>
              <select
                id="year-mobile"
                value={selectedYear}
                onChange={handleYearChange}
                className="w-full bg-white/60 border border-accent/30 rounded-md px-3 py-2 font-body text-text-dark focus:outline-none"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
