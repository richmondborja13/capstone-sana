'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'about' | 'services' | null>(null);
  const [isTestimonialSection, setIsTestimonialSection] = useState(false);
  const [mounted, setMounted] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setOpenDropdown(null);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.3; // Trigger when section is 30% into viewport

      // Check if footer is in view - if so, clear active state
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const footerTop = footerRect.top;
        // If footer is visible in viewport (top is above bottom of viewport)
        if (footerTop < viewportHeight && footerTop > -footerRect.height) {
          setActiveIndex(-1); // Set to -1 to indicate no active item
          setIsTestimonialSection(false);
          return;
        }
      }

      // Check if we're at the very top (hero section)
      if (scrollPosition < 50) {
        setActiveIndex(0);
        setIsTestimonialSection(false);
        return;
      }

      // Define sections with their IDs and corresponding active indices
      const sections = [
        { id: 'home', index: 0 },
        { id: 'about', index: 1 },
        { id: 'testimonial', index: 1 }, // Also activates About Us
        { id: 'service', index: 2 },
        { id: 'contact', index: 3 },
      ];

      // Find which section is currently most visible
      let activeSectionIndex = 0;
      let bestMatch = null;
      let bestVisibility = -1;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          
          // Check if section is in viewport
          const isInViewport = sectionTop < viewportHeight && sectionBottom > 0;
          
          if (isInViewport) {
            // Calculate visibility percentage
            const visibleTop = Math.max(0, -sectionTop);
            const visibleBottom = Math.min(rect.height, viewportHeight - sectionTop);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibilityRatio = visibleHeight / rect.height;

            // Prefer sections that are past the trigger point
            if (sectionTop <= triggerPoint && visibilityRatio > bestVisibility) {
              bestVisibility = visibilityRatio;
              bestMatch = section;
            }
          }
        }
      }

      // If we found a good match, use it
      if (bestMatch) {
        activeSectionIndex = bestMatch.index;
        // Check if we're in the testimonial section
        setIsTestimonialSection(bestMatch.id === 'testimonial');
      } else {
        // Fallback: find the section we've scrolled past
        let foundSection = null;
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i].id);
          if (element) {
            const sectionTop = element.offsetTop;
            if (scrollPosition + triggerPoint >= sectionTop) {
              activeSectionIndex = sections[i].index;
              foundSection = sections[i];
              break;
            }
          }
        }
        // Set testimonial state based on found section
        setIsTestimonialSection(foundSection?.id === 'testimonial' || false);
      }

      setActiveIndex(activeSectionIndex);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        aboutRef.current &&
        !aboutRef.current.contains(target) &&
        servicesRef.current &&
        !servicesRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      if (targetId === 'contact') {
        // For contact section, center it in the viewport to show the whole section
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="text-2xl font-bold text-gray-800">HouseofUs</div>

        <nav className="hidden md:flex items-center gap-8">
          {/* Home */}
          <button
            type="button"
            onClick={() => {
              setActiveIndex(0);
              scrollToSection('home');
            }}
            className={`group relative pb-1 transition-colors ${
              activeIndex === 0 ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            } ${activeIndex === -1 ? 'text-gray-700' : ''}`}
          >
            <span>Home</span>
            <span
              className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                activeIndex === 0 ? 'w-full' : activeIndex === -1 ? 'w-0' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>

          {/* About Us dropdown (with Testimonial) */}
          <div className="relative" ref={aboutRef}>
            <button
              type="button"
              onClick={() => {
                setActiveIndex(1);
                setOpenDropdown(prev => (prev === 'about' ? null : 'about'));
              }}
              className={`flex items-center gap-1 pb-1 transition-colors ${
                activeIndex === 1 ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              } ${activeIndex === -1 ? 'text-gray-700' : ''}`}
            >
              <span>{isTestimonialSection ? 'Testimonials' : 'About Us'}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown === 'about' ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
              <span
              className={`pointer-events-none absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                activeIndex === 1 ? 'w-full' : activeIndex === -1 ? 'w-0' : 'w-0 group-hover:w-full'
              }`}
            />

            <div
              className={`absolute left-0 mt-3 w-40 rounded-lg border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
                openDropdown === 'about'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-1 pointer-events-none'
              }`}
            >
              {isTestimonialSection ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(1);
                      setIsTestimonialSection(true);
                      scrollToSection('testimonial');
                      setOpenDropdown(null);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Testimonials
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(1);
                      setIsTestimonialSection(false);
                      scrollToSection('about');
                      setOpenDropdown(null);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    About Us
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(1);
                      setIsTestimonialSection(false);
                      scrollToSection('about');
                      setOpenDropdown(null);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    About Us
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(1);
                      setIsTestimonialSection(true);
                      scrollToSection('testimonial');
                      setOpenDropdown(null);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Testimonials
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Services dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => {
                setActiveIndex(2);
                setOpenDropdown(prev => (prev === 'services' ? null : 'services'));
              }}
              className={`flex items-center gap-1 pb-1 transition-colors ${
                activeIndex === 2
                  ? 'text-blue-600'
                  : activeIndex === -1
                    ? 'text-gray-700'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
              }`}
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown === 'services' ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span
              className={`pointer-events-none absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                activeIndex === 2 ? 'w-full' : activeIndex === -1 ? 'w-0' : 'w-0 group-hover:w-full'
              }`}
            />

            <div
              className={`absolute left-0 mt-3 w-40 rounded-lg border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
                openDropdown === 'services'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-1 pointer-events-none'
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(2);
                  scrollToSection('service');
                  setOpenDropdown(null);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Contact */}
          <button
            type="button"
            onClick={() => {
              setActiveIndex(3);
              scrollToSection('contact');
            }}
            className={`group relative pb-1 transition-colors ${
              activeIndex === 3
                ? 'text-blue-600'
                : activeIndex === -1
                  ? 'text-gray-700'
                  : isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
            }`}
          >
            <span>Contact</span>
            <span
              className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                activeIndex === 3 ? 'w-full' : activeIndex === -1 ? 'w-0' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
        </nav>

        <Link
          href="/login-register"
          className={`px-6 py-2 rounded-lg border transition-colors inline-block text-center ${
            isScrolled
              ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
              : 'bg-white text-blue-600 border-transparent hover:bg-blue-50'
          }`}
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;


