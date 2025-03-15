import React, { useEffect, useRef } from "react";

const MobileMenu = ({ isOpen, onClose, menuLinks }) => {
  const menuRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement;
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("overflow-hidden");

      // Restore focus to the previously focused element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 lg:hidden
        transform transition-all duration-300 ease-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        bg-white dark:bg-gray-800 shadow-xl
        overflow-y-auto`}
    >
      <div className="p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-3 py-1 rounded-2xl border
            text-gray-800 dark:text-gray-100
            hover:bg-gray-100 dark:hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Close menu"
        >
          <span className="text-20 text-white ">×</span>
        </button>
        {/* Menu links */}
        <nav className="flex flex-col gap-2 mt-8">
          {menuLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-3 rounded-lg
                text-gray-800 dark:text-gray-100 font-medium
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-pink-500
                flex items-center gap-3"
              onClick={onClose}
            >
              {link.icon && (
                <span className="text-lg text-pink-500">{link.icon}</span>
              )}
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;