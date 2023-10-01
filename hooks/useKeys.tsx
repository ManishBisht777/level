"use client";

import { useEffect, useRef } from "react";

// * return ref to be used for input element

export default function useKeys() {
  const inputRef = useRef<HTMLInputElement>(null);

  /*
   * Check if the Ctrl key and the "/" key are pressed simultaneously
   * Focus on the input element if it exists
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "/") {
        event.preventDefault();

        inputRef.current && inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return inputRef;
}
