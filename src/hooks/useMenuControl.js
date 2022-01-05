import { useLayoutEffect, useState } from 'react';

export default function useMenuControl() {
  // State to record if the menu is open
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Click handler for opening and closing the menu
  const clickHandler = () => setMenuOpen(!isMenuOpen);

  useLayoutEffect(() => {
    // Get original body overflow style so we can revert to it later on
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // If the menu is open then set the overflow to hidden to prevent scrolling the page further
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    // Re-enable scrolling when component unmounts by reverting to the original body overflow style value
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  // Returning 3 vales :
  // 1. isMenuOpen: boolean - Is the menu open or not.
  // 2. clickHandler: function - Function used to open and close the menu
  return { isMenuOpen, clickHandler };
}
