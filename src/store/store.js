import create from 'zustand'

export const useFavourStore = create((set) => ({
    favour: [],
    setFavour: (newFavour) => set((state) => ({ favour: [...state.favour, newFavour] })),
    clearFavour: () => set({ favour: [] }),
}))