"use client";

import { useEffect, useRef } from "react";

// return ref to be used for input element

export default function useKeys() {
  const inputRef = useRef<HTMLInputElement>(null); // Create a reference to an input element

  // Check if the Ctrl key and the "/" key are pressed simultaneously
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "/") {
        event.preventDefault();

        // Focus on the input element if it exists
        inputRef.current && inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return inputRef; // Return the input element reference
}
