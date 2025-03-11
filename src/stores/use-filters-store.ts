import { CITIES } from "@/pages/bids/constants";
import { create } from "zustand";

interface UseFiltersStore {
  domain: string;
  filters: {
    city: string;
    company: string;
    year: string;
    name: string;
    situation: string;
    value: string;
  };
  setCity: (city: string) => void;
  setFilters: (filters: Partial<UseFiltersStore["filters"]>) => void;
}

export const useFiltersStore = create<UseFiltersStore>((set) => ({
  domain: CITIES.find((city) => city.value === "jaborandi")!.domain,
  filters: {
    city: "jaborandi",
    company: "3",
    year: "2025",
    name: "",
    situation: "",
    value: "",
  },
  setCity: (city) => {
    const selectedCity = CITIES.find((c) => c.value === city);

    if (selectedCity) {
      set((state) => ({
        domain: selectedCity.domain,
        filters: {
          ...state.filters,
          city,
          company: String(selectedCity.company),
        },
      }));
    }
  },
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
}));
