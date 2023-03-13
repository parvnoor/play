import { create } from 'zustand';
import { ISetStore } from './types';

export const SetStore = create<ISetStore>(set => {
  const fetchSets = async () => {
    const response = await fetch("https://api.pokemontcg.io/v2/sets");
    const data = await response.json();
    set({sets: data.data})
  };
  fetchSets();
  return {
    sets: []
  };
});
