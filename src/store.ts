import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchInput: string) => void;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchInput) =>
    set(() => ({ gameQuery: { searchText: searchInput } })),
  setGenreId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
  setPlatformId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
  setSortOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: order } })),
}));

export default useGameQueryStore;
