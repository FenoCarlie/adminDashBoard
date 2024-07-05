import React, { useRef, useEffect } from "react";

// Define the DropdownMenu component
const DropdownMenu = ({
  isOpen, // Boolean to check if the dropdown is open
  toggleDropdown, // Function to toggle the dropdown state
  children, // Content to display inside the dropdown
  contentStyle, // Additional styles for the dropdown container
  childStyle, // Additional styles for the dropdown content
}) => {
  // Create a ref to access the dropdown container
  const dropdownRef = useRef(null);

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    // If the click is outside the dropdown, close it
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toggleDropdown(false);
    }
  };

  // UseEffect to add/remove the event listener
  useEffect(() => {
    if (isOpen) {
      // Add event listener when dropdown is open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when dropdown is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Run effect whenever isOpen changes

  // Render the dropdown menu
  return (
    <div
      className={`dropDown w-auto max-w-[400px] min-w-[12rem] top-[60px] rounded-lg ${contentStyle}`}
      ref={dropdownRef} // Attach ref to the dropdown container
      onClick={console.log("Clicked")} // Log click for debugging
    >
      {/* Show dropdown content only if open */}
      {isOpen && <div className={`${childStyle}`}>{children}</div>}
    </div>
  );
};

export default DropdownMenu; // Export the component
