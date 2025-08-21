import React, { createContext, useContext, useReducer } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction = 
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.product.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.product.price,
          itemCount: state.itemCount + 1,
        };
      } else {
        const newItem = { ...action.product, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + action.product.price,
          itemCount: state.itemCount + 1,
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const item = state.items.find(item => item.id === action.productId);
      if (!item) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId),
        total: state.total - (item.price * item.quantity),
        itemCount: state.itemCount - item.quantity,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.id === action.productId);
      if (!item) return state;
      
      const quantityDiff = action.quantity - item.quantity;
      const updatedItems = state.items.map(item =>
        item.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      
      return {
        ...state,
        items: updatedItems,
        total: state.total + (item.price * quantityDiff),
        itemCount: state.itemCount + quantityDiff,
      };
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };
    
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};