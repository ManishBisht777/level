import { create } from "zustand";

// Define the CountryStore interface to describe the store's shape
interface CountryStore {
  initialData: []; // Array to store initial data
  setInitialData: (data: []) => void; // Function to set initial data
  filteredData: []; // Array to store filtered data
  setFilteredData: (data: []) => void; // Function to set filtered data
}

// Create and export the useCountryStore
export const useCountryStore = create<CountryStore>((set) => ({
  initialData: [], // Initialize initial data as an empty array
  filteredData: [], // Initialize filtered data as an empty array
  setInitialData: (data) => set(() => ({ initialData: data })),
  setFilteredData: (data) => set(() => ({ filteredData: data })),
}));
