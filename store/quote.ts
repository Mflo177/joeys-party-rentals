import { create } from 'zustand';

type Item = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
  enableQuickAdd?: boolean;
};

interface QuoteStore {
  items: Item[];
  date: string;
  city: string;
  total: number;
  setItems: (items: Item[]) => void;
  updateItem: (id: string, quantity: number) => void;
  setDate: (date: string) => void;
  setCity: (city: string) => void;
  resetQuote: () => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  items: [],
  date: '',
  city: '',
  total: 0,

  setItems: (items) => set({ items }),

  updateItem: (id, quantity) => {
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      );
      const total = updatedItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
      return { items: updatedItems, total };
    });
  },

  setDate: (date) => set({ date }),
  setCity: (city) => set({ city }),
  
  resetQuote: () => set({
    items: [],
    date: '',
    city: '',
    total: 0,
  }),
}));