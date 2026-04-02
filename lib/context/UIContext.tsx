"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

export interface UIContextType {
  modalStack: string[];
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  toastQueue: Toast[];
  addToast: (type: ToastType, message: string) => void;
  removeToast: (id: string) => void;
  isSearchOpen: boolean;
  toggleSearch: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [modalStack, setModalStack] = useState<string[]>([]);
  const [toastQueue, setToastQueue] = useState<Toast[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openModal = useCallback((modalId: string) => {
    setModalStack(prev => [...prev, modalId]);
  }, []);

  const closeModal = useCallback((modalId: string) => {
    setModalStack(prev => prev.filter(id => id !== modalId));
  }, []);

  const removeToast = useCallback((id: string) => {
    setToastQueue(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = Date.now().toString();
    setToastQueue(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, [removeToast]);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(prev => !prev);
  }, []);

  return (
    <UIContext.Provider
      value={{
        modalStack,
        openModal,
        closeModal,
        toastQueue,
        addToast,
        removeToast,
        isSearchOpen,
        toggleSearch,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within UIProvider");
  }
  return context;
}
