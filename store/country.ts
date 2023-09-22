import { create } from "zustand";

interface CountryStore {
  initialData: [];
  setInitialData: (data: []) => void;
  filteredData: [];
  setFilteredData: (data: []) => void;
}

export const useCountryStore = create<CountryStore>((set) => ({
  initialData: [],
  filteredData: [],
  setInitialData: (data) => set(() => ({ initialData: data })),
  setFilteredData: (data) => set(() => ({ filteredData: data })),
}));
