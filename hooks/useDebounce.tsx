import { useState, useEffect } from "react";

function useDebounce(value: string, delay: number) {
  // Initialize state to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Create a timer that will update the debounced value after the specified delay
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer when the component unmounts or when value or delay changes
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, delay]); // Re-run the effect whenever value or delay changes

  // Return the debounced value
  return debouncedValue;
}

export default useDebounce;
