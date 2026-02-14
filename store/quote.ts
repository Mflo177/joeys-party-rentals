import { create } from 'zustand';

type Item = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

interface QuoteStore {
  items: Item[];
  date: string;
  city: string;
  total: number;
  updateItem: (id: string, quantity: number) => void;
  setDate: (date: string) => void;
  setCity: (city: string) => void;
  resetQuote: () => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  items: [
    { id: 'tables', name: 'Tables (seats 8)', quantity: 0, price: 15 },
    { id: 'chairs', name: 'Chairs', quantity: 0, price: 3 },
    { id: 'bouncehouse', name: 'Bounce House', quantity: 0, price: 150 },
  ],
  date: '',
  city: '',
  total: 0,

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
    items: [
      { id: 'tables', name: 'Tables (seats 8)', quantity: 0, price: 15 },
      { id: 'chairs', name: 'Chairs', quantity: 0, price: 3 },
      { id: 'bouncehouse', name: 'Bounce House', quantity: 0, price: 150 },
    ],
    date: '',
    city: '',
    total: 0,
  }),
}));